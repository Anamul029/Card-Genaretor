import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/globalContext";


const Right_Side = () => {

  const { name, setName, image, setImage, selectedSubset, setSelectedSubset, customIcons, setCustomIcon, cardType, setCardType, SelectCardType, setSelectCardType, attack, setAttack, defence, setDefence, cardRank, setCardRank, effectNames, setEffectNames, effectDetails, setEffectDetails, serial, setSerial, currentView, setCurrentView } = useContext(StateContext);
  const maxLength = 100; // Set the maximum length for effect names based on available space
  const maxLenName = 15;
  const maxLenEffectName = 20;
  // Subset গুলো ড্রপডাউন মেনুতে দেখানোর জন্য একটি লিস্ট তৈরি করা হলো
  const subsets = [
    'The_Wandering_Subset', 'The_Forest_Guard_Subset', 'The_Beast_Subset', 'The_Reaper_Subset',
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
    setSelectCardType(e.target.value)
  }

  // function for setting attack value
  const handleSetAttack = e => {
    setAttack(e.target.value)
  }

  // function for setting defence value 
  const handleSetDefence = e => {
    setDefence(e.target.value)
  }

  // manage Serial SR1 to SR10
  const handleSerial = e => {
    if(e.target.value !=='Select Rating'){
      setSerial(e.target.value);
    }
    else{
      setSerial('')
    }
  }

  // function for set Effect Name
  // const handleSetEffectName = e => {
  //   setEffectName(e.target.value);
  // }



  // Function to dynamically change the number of effect names and effect details based on card rank
  // useEffect(() => {
  // if (cardRank === 'R1' || cardRank === 'Runes') {
  //   setEffectNames(['']); // 1 effect name for R1 or Runes
  //   setEffectDetails(['']); // 1 effect detail for R1 or Runes
  // } else if (cardRank === 'R2') {
  //   setEffectNames(['', '']); // 2 effect names for R2
  //   setEffectDetails(['', '']); // 2 effect details for R2
  // } else if (cardRank === 'R3') {
  //   setEffectNames(['', '', '']); // 3 effect names for R3
  //   setEffectDetails(['', '', '']); // 3 effect details for R3
  // }
  // }, []);

  // Handle changes in effect names
  const handleEffectNameChange = (index, value) => {
    if (value.length <= maxLength) { // Limit input length
      const newEffectNames = [...effectNames];
      newEffectNames[index] = value;
      setEffectNames(newEffectNames);
    }
  };

  // Handle changes in effect details
  const handleEffectDetailChange = (index, value) => {
    if (value.length <= maxLength) { // Limit input length
      const newEffectDetails = [...effectDetails];
      newEffectDetails[index] = value;
      setEffectDetails(newEffectDetails);
    }
  };


  return (

    <div className="w-3/5 md:overflow-y-scroll mx-auto px-3">
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
            maxLength={maxLenName}
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
          {/* {selectedSubset === 'Custom' && (
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Upload Custom Icon:</label>
              <input type="file" value={customIcons} accept="image/*" onChange={handleIconUpload} className="block w-full text-sm text-gray-500" />
            </div>
          )} */}

          {/* Selected Subset Icon */}
        </div>
        {/* input field 3  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Card Rank
            </span>
          </label>
          <select value={cardRank} onChange={(e) => {
            setCardRank(e.target.value);
            if (e.target.value === 'R1' || e.target.value === 'Runes') {
              setEffectNames(['']); // 1 effect name for R1 or Runes
              setEffectDetails(['']); // 1 effect detail for R1 or Runes
            } else if (e.target.value === 'R2') {
              setEffectNames(['', '']); // 2 effect names for R2
              setEffectDetails(['', '']); // 2 effect details for R2
            } else if (e.target.value === 'R3') {
              setEffectNames(['', '', '']); // 3 effect names for R3
              setEffectDetails(['', '', '']); // 3 effect details for R3
            }
          }} className="select bg-black select-bordered w-full">
            <option>R1</option>
            <option>R2</option>
            <option>R3</option>
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
          <select value={SelectCardType} onChange={handleCardTypeChanged} className="select bg-black select-bordered w-full">
            <option> Select Card Type</option>
            <option> Assault</option>
            <option>Defense</option>
            <option>Support</option>
          </select>
        </div>
        {/* input field for SR  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Synergy Rating            </span>
          </label>
          <select value={serial} onChange={handleSerial} className="select bg-black select-bordered w-full">
          <option>Select Rating</option>
            <option>SR1</option>
            <option>SR2</option>
            <option>SR3</option>
            <option>SR4</option>
            <option>SR5</option>
            <option>SR6</option>
            <option>SR7</option>
            <option>SR8</option>
            <option>SR9</option>
            <option>SR10</option>
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
        {/* input field 10  effect name purono*/}
        {/* <div className="form-control">
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
        </div> */}
        {/* input field 11 */}
        {/* <div className="form-control">
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
        </div> */}
      </div>
      {/* grid style end */}
      {/* effect name and effect details...................................................... */}
      <div className="mt-1">
        {effectNames && effectNames.map((effect, index) => {
          console.log(effect);
          return (
            <div className="grid grid-cols-2 gap-1" key={index}>
              <div>
                <label className="font-semibold">Effect Name {index + 1}</label>
                <input
                  className="w-full input bg-black input-bordered"
                  type="text"
                  value={effect ? effect : ''}
                  onChange={(e) => handleEffectNameChange(index, e.target.value)}
                  maxLength={maxLenEffectName} // Enforce max length in the input field
                />
                {/* <p>{effect.length}/{maxLength} characters</p> */}
              </div>
              {/* div 2 effect details part */}
              <div>
                <label className="font-semibold">Effect Details {index + 1}</label>
                <input
                  className="w-full input input-bordered bg-black"
                  type="text"
                  value={effectDetails[index]}
                  onChange={(e) => handleEffectDetailChange(index, e.target.value)}
                  maxLength={maxLength} // Enforce max length in the input field
                />
                {/* <p>{effectDetails[index].length}/{maxLength} characters</p> */}
              </div>

            </div>
          )
        })}
      </div>
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
      {/* <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold uppercase text-white">
            Effect
          </span>
        </label>
        <textarea name="" className="bg-black h-32" id=""></textarea>
      </div> */}

      {/* demo image test */}
      {/* Displaying effect details on the card */}

    </div>
  );
};

export default Right_Side;
