import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { additem } from "../Store/store";
const MenuItem = (props) => {
    const dispatch = useDispatch()
    const additemHandler = ()=>{
        dispatch(additem({id:props.item.id,
        name:props.item.name,
    price: props.item.price}))
    }
  return (
    <div className="w-auto h-auto border border-gray-200 ">
      <div className="flex">
        <img
          className="h-[120px] w-32 rounded-lg m-3"
          src={props.item.image}
          alt="ax"
        />
        <div className="text-right pt-4 mr-3">
          <h1 className="text-xl font-bold "> {props.item.name} </h1>
          <p className="text-gray-400 text-sm"> {props.item.description} </p>
        </div>
      </div>
      <div className="flex justify-between items-center m-3">
        <button
          onClick={additemHandler}
          className="px-6 py-2 bg-white text-[#ff00a6] hover:bg-[#ff00a6] border border-gray-200 shadow-md hover:text-white rounded-2xl"
        >
          افزودن
        </button>
        <p className="font-bold"> {`${props.item.price} تومان`} </p>
      </div>
    </div>
  );
};

export default MenuItem;
