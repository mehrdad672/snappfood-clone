import React from "react";
import ax from "../Assets/kabab.jpeg";
import { useSelector , useDispatch } from "react-redux/es/exports";
import { additem } from "../Store/store";
import MenuItem from "./MenuItem";
const menuItems = [
  {
    name: "چلوکباب وزیری",
    description:
      "یک سیخ کباب لقمه گوشت گوسفندی ۱۵۰ گرمی، یک سیخ جوجه کباب سینه مرغ ۲۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، دورچین: یک عدد گوجه کبابی، فلفل",
    price: 123000,
    id: 1,
    image: ax,
  },
  {
    name: "چلوکباب لقمه",
    description:
      "یک سیخ کباب لقمه گوشت گوسفندی ۱۵۰ گرمی، یک سیخ جوجه کباب سینه مرغ ۲۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، دورچین: یک عدد گوجه کبابی، فلفل",
    price: 110000,
    id: 2,
    image: ax,
  },
  {
    name: "چلوجوجه کباب ",
    description:
      "یک سیخ کباب لقمه گوشت گوسفندی ۱۵۰ گرمی، یک سیخ جوجه کباب سینه مرغ ۲۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، دورچین: یک عدد گوجه کبابی، فلفل",
    price: 98000,
    id: 3,
    image: ax,
  },
  {
    name: "چلوکباب درباری",
    description:
      "یک سیخ کباب لقمه گوشت گوسفندی ۱۵۰ گرمی، یک سیخ جوجه کباب سینه مرغ ۲۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، دورچین: یک عدد گوجه کبابی، فلفل",
    price: 178000,
    id: 4,
    image: ax,
  },
  {
    name: " کباب نگینی ",
    description:
      "یک سیخ کباب لقمه گوشت گوسفندی ۱۵۰ گرمی، یک سیخ جوجه کباب سینه مرغ ۲۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، دورچین: یک عدد گوجه کبابی، فلفل",
    price: 103000,
    id: 5,
    image: ax,
  },
];

const KababCategori = () => {
    const dispatch = useDispatch()
    const additemHandler = ()=>{
        dispatch(additem())
    }
    const itemslist = menuItems.map((item) => (
  <li key={item.id}>
    <MenuItem item={item}/>
  </li>
        // <li  key={item.id}>
        //   <div className="w-auto h-auto border border-gray-200 ">
        //     <div className="flex">
        //       <img
        //         className="h-[120px] w-32 rounded-lg m-3"
        //         src={item.image}
        //         alt="ax"
        //       />
        //       <div className="text-right pt-4 mr-3">
        //         <h1 className="text-xl font-bold "> {item.name} </h1>
        //         <p className="text-gray-400 text-sm"> {item.description} </p>
        //       </div>
        //     </div>
        //     <div className="flex justify-between items-center m-3">
        //       <button onClick={additemHandler} className="px-6 py-2 bg-white text-[#ff00a6] hover:bg-[#ff00a6] border border-gray-200 shadow-md hover:text-white rounded-2xl">
        //         افزودن
        //       </button>
        //       <p className="font-bold"> {`${item.price} تومان`} </p>
        //     </div>
        //   </div>
        // </li>
      
    ));
  return <div className="list-none grid grid-cols-1 lg:grid-cols-2 gap-0 ">
    
        {itemslist}
    
  </div>;
};

export default KababCategori;
