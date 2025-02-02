import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-white shadow-xl hover:scale-105 duration-200   text-black dark:bg-[#f3d4b3f3] dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body  text-black">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-[#905a21f3]">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer hover:bg-[#905a21f3] px-2 py-1 rounded-full border-[2px] border-black hover:dark:bg-[#996227f3] hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
