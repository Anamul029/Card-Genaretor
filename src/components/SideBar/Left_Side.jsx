import * as htmlToImage from "html-to-image";
import { useContext, useRef } from "react";
import BckImg1 from "../../assets/images/test.png";
import BckImgID1 from "../../assets/images/test_Id.png";
import BckImg2 from "../../assets/images/test2.png";
import BckImgID2 from "../../assets/images/test2_Id.png";
import BckImg3 from "../../assets/images/test3.png";
import BckImgID3 from "../../assets/images/test3_Id.png";
import BckImg4 from "../../assets/images/rune.png";
import BckImgID4 from "../../assets/images/rune_blank.png";
// import BckImg1 from "../../assets/images/RANK 1.png";
// import BckImgID1 from "../../assets/images/RANK 1 ID.png";
// import BckImg2 from "../../assets/images/RANK 2.png";
// import BckImgID2 from "../../assets/images/RANK 2 ID.png";
// import BckImg3 from "../../assets/images/RANK 3.png";
// import BckImgID3 from "../../assets/images/RANK 3 ID.png";
// import BckImg4 from "../../assets/images/RUNE 1.png";
// import BckImgID4 from "../../assets/images/BLANK.png";

import { StateContext } from "../../context/globalContext";
import The_Wandering_Subset from "../../assets/images/THE WANDERING SUBSET.png"
import The_Forest_Guard_Subset from "../../assets/images/THE FOREST GUARD SUBSET.png"
import The_Beast_Subset from "../../assets/images/THE ANCIENT BEAST SUBSET.png" //something wrong
import The_Reaper_Subset from "../../assets/images/The Reaper Subset Icon.png"
import The_Iron_Kappa_Subset from "../../assets/images/The Iron Kappa Subset Icon.png"
import The_Valiant_Subset from "../../assets/images/The Valiant Subset Icon.png"
import The_Daemon_Subset from "../../assets/images/The Daemon Subset Icon.png"
import The_Aria_Subset from "../../assets/images/The Aria Subset Icon.png"
import The_Wyvern_Subset from "../../assets/images/The Wyvern Subset Icon.png"
import The_Asylum_Subset from "../../assets/images/The Asylum Subset Icon.png"
import The_Gladiator_Subset from "../../assets/images/The Gladiator Subset Icon.png"
import The_Minotaurus_Subset from "../../assets/images/THE MINOTAURUS SUBSET.png"
import The_Swamp_Dweller_Subset from "../../assets/images/The Swamp Dweller Subset Icon.png"
import The_Harpy_Subset from "../../assets/images/The Harpy Subset Icon.png"
const Left_Side = () => {
  // new practice
  // const [currentView, setCurrentView] = useState('standard'); // Initial view is 'standard'
  const { name, setName, image, setImage, selectedSubset, setSelectedSubset, customIcons, setCustomIcon, cardRank, setCardRank, cardType, setCardType, SelectCardType, setSelectCardType, attack, setAttack, defence, setDefence, effectName, setEffectName, effectNames, setEffectNames, effectDetails, setEffectDetails, serial, setSerial, currentView, setCurrentView } = useContext(StateContext);
  console.log(customIcons);
  // Mapping the subset names to their respective icons
  const subsetIcons = {
    "The_Wandering_Subset": The_Wandering_Subset,
    "The_Forest_Guard_Subset": The_Forest_Guard_Subset,
    "The_Beast_Subset": The_Beast_Subset,
    "The_Reaper_Subset": The_Reaper_Subset,
    "The_Iron_Kappa_Subset": The_Iron_Kappa_Subset,
    "The_Valiant_Subset": The_Valiant_Subset,
    "The_Daemon_Subset": The_Daemon_Subset,
    "The_Aria_Subset": The_Aria_Subset,
    "The_Wyvern_Subset": The_Wyvern_Subset,
    "The_Asylum_Subset": The_Asylum_Subset,
    "The_Gladiator_Subset": The_Gladiator_Subset,
    "The_Minotaurus_Subset": The_Minotaurus_Subset,
    "The_Swamp_Dweller_Subset": The_Swamp_Dweller_Subset,
    "The_Harpy_Subset": The_Harpy_Subset,
  };

  // Sample images for each rank
  const images = {
    R1: { general: BckImg1, id: BckImgID1 },
    R2: { general: BckImg2, id: BckImgID2 },
    R3: { general: BckImg3, id: BckImgID3 },
    Runes: { general: BckImgID4, id: BckImg4 }
  };


  const selectedIcon = subsetIcons[selectedSubset] || ""; // Get the icon based on the 
  // Templete View পরিবর্তনের জন্য ফাংশন
  const switchView = () => {
    // setCurrentView((prevView) => (prevView === 'standard' ? 'idCard' : 'standard'));
    setCurrentView((prevView) => (prevView === 'general' ? 'id' : 'general'));

  };
  // set reload on click the new card button
  const reloadWebsite = () => {
    window.location.reload();  // পুরো ওয়েবসাইট রিলোড করবে
  };


  // Downloading system for div to jpeg
  const divEle = useRef();
  const handleJpg = () => {
    console.log("🚀 ~ handleJpg ~ divEle.current:");
    htmlToImage
      .toJpeg(divEle.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };


  // save card data in json format

  // const handleArtUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setCardArt(reader.result); // base64 or URL
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  // Prepare card data for download
  const downloadCardData = () => {
    const cardData = {
      name: name,
      subset: selectedSubset,
      icon: selectedIcon,
      image: image,
      cardType: cardType, // this can be base64 or a URL
      SelectCardType: SelectCardType,
      attack: attack,
      cardRank: cardRank,
      defence: defence,
      effectName: effectName,
      effectNames: effectNames,
      effectDetails: effectDetails,
      serial: serial,
    };
    // Convert object to JSON string
    const jsonString = JSON.stringify(cardData, null, 2); // Indented for readability

    // Create a Blob from the JSON string
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create a temporary link element
    const link = document.createElement('a');

    // Create a URL for the blob and set it as the link's href
    link.href = URL.createObjectURL(blob);

    // Set the download attribute for the file name
    link.download = `${name}_${cardRank}_card.json`;

    // Trigger the download by simulating a click on the link
    link.click();

    // Clean up the URL object after download
    URL.revokeObjectURL(link.href);
  };



  // Load card data from uploaded JSON file
  const loadCardData = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = JSON.parse(e.target.result); // Parse the JSON data

        // Populate form fields with loaded data
        setName(jsonData.name || '');
        setSelectedSubset(jsonData.subset || '');
        setImage(jsonData.image || '');
        setCustomIcon(jsonData.icon || '');
        setCardRank(jsonData.cardRank || '');
        setCardType(jsonData.cardType || '');
        setSerial(jsonData.serial || '');
        setSelectCardType(jsonData.SelectCardType || '');
        setEffectName(jsonData.effectName || '');
        setAttack(jsonData.attack || 0)
        setDefence(jsonData.defence || 0)
        setEffectNames(jsonData.effectNames || [''])
        setEffectDetails(jsonData.effectDetails || [''])
        // setAttackValue(jsonData.attack || 0);
        // setDefenseValue(jsonData.defense || 0);
        setCardType(jsonData.cardType || null); // Load base64 or URL of the card image
      };
      reader.readAsText(file); // Read the file as text (JSON format)
    }
  };

  const names = effectNames.map((detail, index) => {


    if (effectNames[index] === '') {
      return <div key={index} className="effect-detail-box w-[180px]  md:w-[100px]">
        <div className="text-center invisible">Null</div>
      </div>
    }
    else {
      return <div key={index} className="effect-detail-box  w-[180px] md:w-[250px]">
        <p className="text-xs md:text-xl">{effectNames[index]}</p>
      </div>
    }

  })


  return (
    <div className=" md:w-2/5 z-50 relative">
      <div className="mx-auto">
        {/* Genarel Rank image start................................................................ */}
        {currentView && currentView === 'general' && (
          <div className="w-[260px] md:w-[340px] mt-2 mx-auto" >
            <div className="relative">

              {/* structure div in down */}
              <div className="" ref={divEle}>
                <img
                  className="mx-auto h-[100%] w-full"
                  src={images[cardRank].general}
                  // src="https://i.ibb.co.com/bdDqKmv/RANK-1.png"
                  alt="Standard Card"
                  loading="lazy"

                />

                <div className="text-center mt-4 ">
                  {/* Card Name */}
                  <div className="absolute left-[18%] md:left-[16.8%] top-[9%] md:top-[9.2%] z-50 md:text-xl font-bold">
                    <h2 className="text-center text-black w-[180px] md:w-[240px]">{name}</h2>
                  </div>

                  {/* defense value setup */}
                  <div className="absolute  right-[14%] md:bottom-[2%] bottom-[1%]">
                    {cardRank !== "Runes" &&
                      <h1 className=" md:font-semibold">{defence}</h1>
                    }
                  </div>
                  {/* Attack value setup */}
                  <div className="absolute  left-[13%] md:bottom-[1.5%] bottom-[0.5%]">
                    {cardRank !== "Runes" &&
                      <h1 className=" md:font-semibold">{attack}</h1>
                    }
                  </div>
                  {/* effect Names */}
                  {cardRank !== "Runes" &&
                    <div className="effect-boxes absolute left-[15%] md:left-[14.4%] md:bottom-[11%] bottom-[11.5%] text-black font-bold  grid grid-cols-1 gap-7 md:gap-8">
                      {names}
                    </div>
                  }
                </div>
                {/* upload Image */}
                <img className="absolute  -z-50 md:left-[0%] w-full  top-[14%] h-[70%]" src={image} alt="" />
                {/* Selected Subset Icon */}

                {cardRank !== "Runes" &&
                  <div className="w-36 h-36 mt-0 absolute right-[62%] top-[0%] md:right-[69%] md:top-[3.6%] z-50">
                    {selectedIcon ? (
                      <img src={selectedIcon} alt={selectedSubset} className="rounded-full w-full h-full object-contain" />
                    ) : customIcons ? (
                      <img src={customIcons} alt="Custom Icon" className=" rounded-full w-full h-full object-contain" />
                    ) : (
                      <p className="text-gray-400"></p>
                    )}
                  </div>
                }

              </div>

            </div>
            {/* Add your additional HTML code here */}

          </div>

        )}
        {/* Genarel Rank image end......................................................... */}
        {/* ID Card Image start.......................................................*/}
        {currentView === 'id' && (

          // Id Card mother div............................
          <div className="w-[260px] md:w-[340px] mt-2 mx-auto" >
            <div className="relative">

              {/* structure div in down */}
              <div ref={divEle}>
                {/* card details */}
                <div className="effect-boxes  text-black absolute left-[7%] top-[22%] md:left-[11%] w-[50%] md:top-[23%] grid grid-cols-1  md:gap-7">
                  {effectDetails.map((detail, index) => (
                    <div key={index} className="effect-detail-box p-2 w-56 md:w-64 md:h-24">
                      <p className="mb-7 text-xs md:text-[16px] text-center"> <span>{effectDetails[index]}</span></p>
                    </div>
                  ))}
                </div>
                <img
                  className="mx-auto h-[100%] w-full"
                  src={images[cardRank].id}
                  alt="Standard Card"
                  loading="lazy"

                />

                <div className="text-center">
                  {/* card Name */}
                  <div className="absolute left-[18%] md:left-[16.8%] top-[9%] md:top-[9.2%] z-50 md:text-xl font-bold">
                    <h2 className="text-center text-black w-[180px] md:w-[240px]">{name}</h2>
                  </div>

                  {/* Selected Serial No */}
                  <div className="mt-4 absolute top-[11.5%] left-[4.3%] md:left-[5%] md:top-[12.5%] z-50">
                    {cardRank !== "Runes" &&
                      <h2>{serial}</h2>
                    }
                  </div>
                  {/* Attack value setup */}
                  <div className="absolute right-[1.5%]  md:right-[2.6%] bottom-[3.5%]">
                    {cardRank !== "Runes" &&
                      <h2 className="text-xs">{cardType}</h2>
                    }
                  </div>
                  {/* card rank set */}
                  <div className="absolute bottom-[2%] left-[2.5%] md:left-[3.6%] md:bottom-[3%]">
                    {cardRank !== "Runes" &&
                      <h1 className="text- font-semubold">{cardRank}</h1>
                    }
                  </div>

                </div>
                {/* ID Image */}
                <img className="absolute  -z-50 md:left-[0%] w-full  top-[14%] h-[70%]" src={image} alt="" style={{ width: '260', height: '260' }} />
                {/* Selected Subset Icon */}

              </div>


            </div>
            {/* Add your additional HTML code here */}

          </div>
        )}


      </div>

      {/* toggle button for change the structure */}
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={switchView}
          className="px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          &lt; Prev
        </button>
        <button
          onClick={switchView}
          className="px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next &gt;
        </button>
      </div>
      {/* toggle button */}
      {/* all buttons */}
      <div className="grid md:grid-cols-2 h-auto gap-4 mx-6 mt-2 md:mt-4">
        <button onClick={reloadWebsite} className="bg-[#515664] uppercase w-full p-1 hover:bg-[#97a52b] hover:text-white transition duration-300 ease-in-out rounded-sm">New Card</button>
        <button onClick={downloadCardData} className="bg-[#515664] uppercase w-full p-1 hover:bg-[#97a52b] hover:text-white transition duration-300 ease-in-out rounded-sm">Save Card</button>
        <div onClick={handleJpg} className="text-center bg-[#515664] uppercase w-full p-1 hover:bg-[#4caf3d] hover:text-white transition duration-300 ease-in-out rounded-sm">Export As</div>
        <button className="bg-[#515664] uppercase w-full p-1 relative overflow-hidden hover:bg-[#97a52b] hover:text-white transition duration-300 ease-in-out rounded-sm">
          Load Card
          <input
            type="file"
            accept="application/json"
            onChange={loadCardData}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </button>
      </div>

    </div >
  );
};

export default Left_Side;
