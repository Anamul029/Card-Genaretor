import * as htmlToImage from "html-to-image";
import React, { useContext, useRef } from "react";
import BckImg from "../../assets/images/game.png";
import { StateContext } from "../../context/globalContext";
const Left_Side = () => {
  const { name } = useContext(StateContext);
  const divEle = useRef();
  console.log("🚀 ~ App ~ divEle:", divEle);
  const handleJpg = () => {
    // console.log("🚀 ~ handleJpg ~ divEle.current:", divEle.current);
    htmlToImage
      .toJpeg(divEle.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className=" md:w-2/5 relative">
      <div ref={divEle} onClick={handleJpg}>
        <img
          className="mx-auto mt-2 md:h-[500px] md:w-[350px]"
          src={BckImg}
          alt=""
        />
        <div className="absolute left-[30%] top-8 z-50 text-2xl text-black font-bold">
          {name}
        </div>
      </div>
      {/* all buttons */}
      <div className="grid md:grid-cols-2 h-auto gap-4 mx-6 mt-2 md:mt-4">
        <button className="bg-[#515664] uppercase w-full p-1">New Card</button>
        <button className="bg-[#515664] uppercase w-full p-1">Save Card</button>
        <button className="bg-[#515664] uppercase w-full p-1">Export As</button>
        <button className="bg-[#515664] uppercase w-full p-1">Load Card</button>
        <button className="bg-[#42481b] uppercase w-full p-1">Yegopro</button>
        <button className="bg-[#42481b] uppercase w-full p-1">Discord</button>
      </div>
    </div>
  );
};

export default Left_Side;
