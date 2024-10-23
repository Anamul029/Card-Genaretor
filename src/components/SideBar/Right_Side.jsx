import { useContext, useState } from "react";
import { StateContext } from "../../context/globalContext";


const Right_Side = () => {

  const { name, setName, image, setImage, selectedSubset, setSelectedSubset, customIcon, setCustomIcon, cardType, setCardType, attack, setAttack, defence, setDefence,effectName,setEffectName } = useContext(StateContext);
  // Subset গুলো ড্রপডাউন মেনুতে দেখানোর জন্য একটি লিস্ট তৈরি করা হলো
  const subsets = [
    'Custom', 'The_Wandering_Subset', 'The_Forest_Guard_Subset', 'The_Beast_Subset', 'The_Reaper_Subset',
    'The_Iron_Kappa_Subset', 'The_Valiant_Subset', 'The_Daemon_Subset', 'The_Aria_Subset', 'The_Wyvern_Subset',
    'The_Asylum_Subset', 'The_Gladiator_Subset', 'The_Minotaurus_Subset', 'The_Swamp_Dweller_Subset', 'The_Harpy_Subset', 'Generic'
  ];
  // State তৈরি করা হলো subset এবং custom icon-এর জন্য
  // const [selectedSubset, setSelectedSubset] = useState('');
  // const [customIcon, setCustomIcon] = useState(null);

  // subset সিলেক্ট করার ফাংশন
  const handleSubsetChange = (event) => {
    setSelectedSubset(event.target.value);
    console.log(event.target.value);
  };

  // Custom icon আপলোডের জন্য ফাংশন
  const handleIconUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomIcon(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  // Function to handle file input change event
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader object

      // Event listener for when the file is loaded
      reader.onloadend = () => {
        // setSelectedImage(reader.result); // Set the image data as the result
        setImage(reader.result)
      };

      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  // function for handleCardTypeChanged 
  const handleCardTypeChanged = e => {
    if (e.target.value === 'Assault') {
      setCardType('ATK')
    }
    else if (e.target.value === 'Defense') {
      setCardType('DEF')
    }
    else {
      setCardType('SUP')
    }
  }

  // function for setting attack value
  const handleSetAttack = e => {
    setAttack(e.target.value)
  }

  // function for setting defence value
  const handleSetDefence = e => {
    setDefence(e.target.value)
  }

  // function for set Effect Name
  const handleSetEffectName=e=>{
    setEffectName(e.target.value);
  }


  return (

    <div className="w-3/4 md:overflow-y-scroll mx-auto px-3">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* input field 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Card Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            // onChange={setName}
            onChange={(e) => setName(e.target.value)}
            className="input bg-black input-bordered"
            required
          />
        </div>

        {/* input field 2 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Card Subset
            </span>
          </label>
          {/* Dropdown Menu for Card subset */}
          <select
            value={selectedSubset}
            onChange={handleSubsetChange}
            className="p-2 border border-gray-300 rounded-md select bg-black select-bordered w-full"
          >
            <option value="">Select Subset</option>
            {subsets.map((subset) => (
              <option key={subset} value={subset}>{subset}</option>
            ))}
          </select>
          {/* Custom Icon Upload */}
          {selectedSubset === 'Custom' && (
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Upload Custom Icon:</label>
              <input type="file" value={customIcon} accept="image/*" onChange={handleIconUpload} className="block w-full text-sm text-gray-500" />
            </div>
          )}

          {/* Selected Subset Icon */}
        </div>
        {/* input field 3  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Card Rank
            </span>
          </label>
          <select className="select bg-black select-bordered w-full">
            <option>Rank 1</option>
            <option>Rank 2</option>
            <option>Rank 3</option>
            <option>Runes</option>

          </select>
        </div>
        {/* input field 4 card select type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Card Type
            </span>
          </label>
          <select onChange={handleCardTypeChanged} value={cardType} className="select bg-black select-bordered w-full">
            <option> Select Card Type</option>
            <option> Assault</option>
            <option>Defense</option>
            <option>Support</option>
          </select>
        </div>


        {/* input field 8 attack */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Attack
            </span>
          </label>
          <input
            type="number"
            min="0"
            max="999"
            value={attack}
            onChange={handleSetAttack}
            className="input bg-black input-bordered"

          />
          {/* <input
          type="text"
          onChange={handleSetAttack}
          className="input bg-black input-bordered"
          required
        /> */}
        </div>
        {/* input field 9 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Defence
            </span>
          </label>
          <input
            type="number"
            min="0"
            max="999"
            value={defence}
            onChange={handleSetDefence}
            className="input bg-black input-bordered"

          />
        </div>
        {/* input field 10 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Effect Name
            </span>
          </label>
          <input
            onChange={handleSetEffectName}
            type="text"
            value={effectName}
            className="input bg-black input-bordered"
            required
          />
        </div>
        {/* input field 11 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Effect Details
            </span>
          </label>
          <div>
            <input
              type="text"
              className="input w-full bg-black input-bordered"
              required
            />

          </div>
        </div>
      </div>
      {/* grid style end */}

      {/* image input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold uppercase text-white">
            Choose Image File
          </span>
        </label>
        <input value={image} type="text" className="input bg-black input-bordered" required />
      </div>

      {/* choose file */}
      <div className="mt-4">
        {/* <input
          type="file"
          className="file-input file-input-ghost w-full bg-black"
        /> */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

      </div>

      {/* Effect field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold uppercase text-white">
            Effect
          </span>
        </label>
        <textarea name="" className="bg-black h-32" id=""></textarea>
      </div>

      {/* demo image test */}
      <h2 className="">Abul:{attack}</h2>

    </div>
  );
};

export default Right_Side;
