import React from "react";

const Test1 = () => {
  return (
    <>
      {/* starting practise here */}
      <div className="relative before:content-['Hello'] after:content-['World']">
        My Text
      </div>

      {/* red box */}
      <div className="relative mt-10 before:content-[''] before:absolute before:bg-red-500 before:w-10 before:h-10">
        Hello World
      </div>

      {/* red box with top and left */}
      <div
        className="relative mt-10 p-6 bg-gray-100 
     before:content-[''] before:w-4 before:h-4 before:bg-red-500 
     before:absolute before:top-2 before:left-2"
      >
        Basic Box
      </div>

      {/* underline using before pseudo element */}
      <p className="relative mt-10 before:content-[''] before:absolute before:left-0 before:bottom-0 
before:h-[3px] before:w-full before:bg-blue-500">
  Tailwind underline
</p>

      {/* top left right bottom */}
      <div className="relative w-40 h-40 bg-gray-200 mt-10">
        <div className="absolute top-0 left-0 w-6 h-6 bg-red-500"></div>
        <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500"></div>
        <div className="absolute left-0 bottom-0  w-6 h-6 bg-green-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-500"></div>
      </div>


{/* list bullet */}
      <li
        className="relative pl-5 mt-10 before:content-[''] before:absolute before:left-0 before:top-1/2 
before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-500 before:rounded-full"
      >
        Notification Message
      </li>

      <li className="relative pl-5 
    before:content-[''] 
    before:absolute 
    before:left-0 
    before:top-1/2 before:-translate-y-1/2 
    before:w-2 before:h-2 
    before:bg-red-500 
    before:rounded-full">
  My List Item
</li>

<div className="relative p-6 rounded-xl shadow mt-10
     before:content-[''] before:absolute before:-top-1 before:left-0
     before:w-full before:h-1 before:bg-linear-to-r before:from-purple-500 before:to-pink-500">
  Beautiful card
</div>


    </>
  );
};

export default Test1;
