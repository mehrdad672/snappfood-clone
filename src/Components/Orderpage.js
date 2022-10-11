import React from "react";
import snapsvg from "../Assets/svg-6.svg";
import OrderItem from "./OrderItem";
import MenuCategori from "./MenuCategori";
import ax from "../Assets/kabab.jpeg";
import { useRef } from "react";
const Orderpage = () => {
  const kabab = useRef(null)
  const irani = useRef(null)
  const khoresht = useRef(null)
  const drink = useRef(null)

  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }
  return (
    <div  className="bg-[#f9fafb] w-full  font-iran ">
      {/* Header */}
      <div className="flex flex-row items-center justify-between bg-[#f9fafb] md:flex-row ml-8 mr-2 sticky">
        <div className="flex flex-row bg-[#f9fafb] space-x-2 items-center ">
          <button className="font-iran bg-[#ff00a6] rounded-lg p-3 text-xl  text-white font-bold hover:bg-[#ff33a6] flex mr-2">
            ورود یا عضویت
          </button>
          <a className=" font-iran bg-[#f9fafb] text-[#3a3d42]  flex" href="#">
            ثبت نام فروشندگان
          </a>
          <svg
            className=" w-6 "
            viewBox="0 0 24 26"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.10557 3.22149C3.27497 2.8827 3.62123 2.6687 4 2.6687H19.9987C20.3773 2.6687 20.7235 2.88259 20.893 3.22125L22.8943 7.22124C22.9638 7.36016 23 7.51336 23 7.6687V8.6687C23 9.62235 22.6186 10.4869 22 11.1182V21.6687C22 22.221 21.5523 22.6687 21 22.6687H15C14.4477 22.6687 14 22.221 14 21.6687V17.1687C14 16.0641 13.1046 15.1687 12 15.1687C10.8954 15.1687 10 16.0641 10 17.1687V21.6687C10 22.221 9.55229 22.6687 9 22.6687H3C2.44772 22.6687 2 22.221 2 21.6687V11.1182C1.38141 10.4869 1 9.62235 1 8.6687V7.6687C1 7.51345 1.03615 7.36034 1.10557 7.22149L3.10557 3.22149ZM4 12.1333V20.6687H8V17.1687C8 14.9596 9.79086 13.1687 12 13.1687C14.2091 13.1687 16 14.9596 16 17.1687V20.6687H20V12.1333C19.8367 12.1566 19.6698 12.1687 19.5 12.1687C18.5207 12.1687 17.6353 11.7665 17 11.1182C16.3647 11.7665 15.4793 12.1687 14.5 12.1687C13.5207 12.1687 12.6353 11.7665 12 11.1182C11.3647 11.7665 10.4793 12.1687 9.5 12.1687C8.52065 12.1687 7.63526 11.7665 7 11.1182C6.36474 11.7665 5.47935 12.1687 4.5 12.1687C4.33024 12.1687 4.1633 12.1566 4 12.1333ZM21 7.90491V8.6687C21 9.49713 20.3284 10.1687 19.5 10.1687C18.6716 10.1687 18 9.49713 18 8.6687C18 8.11642 17.5523 7.6687 17 7.6687C16.4477 7.6687 16 8.11642 16 8.6687C16 9.49713 15.3284 10.1687 14.5 10.1687C13.6716 10.1687 13 9.49713 13 8.6687C13 8.11642 12.5523 7.6687 12 7.6687C11.4477 7.6687 11 8.11642 11 8.6687C11 9.49713 10.3284 10.1687 9.5 10.1687C8.67157 10.1687 8 9.49713 8 8.6687C8 8.11642 7.55228 7.6687 7 7.6687C6.44772 7.6687 6 8.11642 6 8.6687C6 9.49713 5.32843 10.1687 4.5 10.1687C3.67157 10.1687 3 9.49713 3 8.6687V7.90477L4.61803 4.6687H19.3808L21 7.90491Z"
            ></path>
          </svg>
          {/* <img src="../Assets/اسنپ فود _ سفارش آنلاین غذا از تمامی رستوران ها و فست فودها-6.svg" alt=""/> */}
        </div>
        <span className="bg-[#ebedf0] flex items-center justify-end px-3 py-3 rounded-2xl w-[350px] ">
          <input
            className="bg-inherit w-[200px] focus:outline-none"
            type="text"
            placeholder="جست و جو در تهیه غذای امیر"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-gray-400 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <div className="">
          <img className="w-[80px]" src={snapsvg}></img>
        </div>
      </div>
      <div className="flex mt-10">
        {/* Cart */}
        <div className="hidden md:hidden lg:w-[25vw] lg:block h-screen px-4 overflow-auto scrollbar-hide ">
          {/* <div className="bg-white w-full rounded-2xl text-right ">
            {" "}
            to be ADDED
          </div>
          <div className="bg-white w-full rounded-2xl text-right ">
            {" "}
            to be ADDED
          </div> */}

          <div  className="bg-white rounded-lg w-full ">
            <div className="flex flex-row justify-between items-center px-2 pt-3">
             
              <svg 
              
                className="w-4  text-red-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 14"
                fill="currentColor"
                role="button"
              >
                <path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z"></path>
              </svg>
              <h1 className=""> (3)سبد خرید </h1>
            </div>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <div className="felx flex-col px-3 mt-3 text-gray-700 space-y-3 ">
              <div  className="flex items-center justify-between">
                <h1>178000 تومان</h1>
                <h1>مجموع</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1>  15000تومان</h1>
                <h1>هزینه بسته بندی</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1>رایکان</h1>
                <h1>مالیات</h1>
              </div>
              <hr/>
              <div className="flex items-center justify-between">
                <h1>19300 تومان</h1>
                <h1 className="font-bold">قابل پرداخت</h1>
              </div>
            </div>
            <textarea placeholder="...توضیحات سفارش" className="text-right text-lg p-2 focus: outline-none focus:border-red-300 ml-8 mt-3 w-[250px] h-[100px] rounded-lg border border-gray-400"></textarea>
          </div>
        </div>
        <div className= "bg-white hidden md:block lg:block w-[50vw] h-screen rounded-lg border border-gray-200 overflow-auto scroll-smooth scrollbar-hide py-5 px-3">
          <div id="kabab" ref={kabab}>
            <h1>کباب</h1>
            <MenuCategori />
          </div>
          <br />
          <div id="irani" ref={irani}>
          <h1>ایرانی</h1>
            <MenuCategori />
          </div>
          <br />
          <div id="khoresht" ref={khoresht} >
          <h1>خورشت</h1>
            <MenuCategori />
          </div>
          <div id="drink" ref={drink} >
          <h1>نوشیدنی</h1>
            <MenuCategori />
          </div>
        </div>
        <div className="lg:w-[25vw] md:w-[50vw] w-[100vw] mb-4 px-2 h-1/2 md:h-screen ">
          <div className="flex justify-end items-center space-x-3">
            <div className="flex flex-col items-end space-y-3">
              <div className="flex space-x-2 items-center">
                <p className="text-gray-400 "> (نظر52) </p>
                <p>4.4</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="yellow"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-xl">تهیه غذای امیر</h1>
            </div>
            <img className="w-[100px] rounded-xl" src={ax} alt="ax" />
            
          </div>
          <button
              className=" shadow-lg py-2 mt-4 border border-gray-200 w-full flex items-center justify-center space-x-3 font-bold text-lg bg-white rounded-3xl text-[#00b862] hover:text-[#008542]"
              type="button"
            >
              <h1>اطلاعات و نظرات</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              
            </button>
            <div>
              <ul className="mt-5 ml-3 text-right px-4 " >
                <li  onClick={()=>scroll('kabab')} className="text-gray-600 text-lg font-bold  cursor-pointer">کباب</li>
                <li onClick={()=>scroll('irani')} className="text-gray-600 font-bold text-lg cursor-pointer">ایرانی</li>
                <li onClick={()=>scroll('khoresht')} className="text-gray-600 font-bold text-lg cursor-pointer">خورشت</li>
                <li onClick={()=>scroll('drink')} className="text-gray-600 font-bold text-lg cursor-pointer">نوشیدنی</li>
              </ul>
            </div>
        </div>
      
      </div>
      <div className= "bg-white   md:hidden  w-full h-screen rounded-lg border border-gray-200 overflow-auto scroll-smooth scrollbar-hide py-5 px-3">
          <div id="kabab" ref={kabab}>
            <h1>کباب</h1>
            <MenuCategori />
          </div>
          <br />
          <div id="irani" ref={irani}>
          <h1>ایرانی</h1>
            <MenuCategori />
          </div>
          <br />
          <div id="khoresht" ref={khoresht} >
          <h1>خورشت</h1>
            <MenuCategori />
          </div>
          <div id="drink" ref={drink} >
          <h1>نوشیدنی</h1>
            <MenuCategori />
          </div>
        </div>
      <div className=" w-full mt-4 lg:hidden h-screen px-4 overflow-auto scrollbar-hide ">
          <div className="bg-white w-full rounded-2xl text-right ">
            {" "}
            to be ADDED
          </div>
          <div className="bg-white w-full rounded-2xl text-right ">
            {" "}
            to be ADDED
          </div>

          <div  className="bg-white rounded-lg w-full ">
            <div className="flex flex-row justify-between items-center px-2 pt-3">
             
              <svg 
              
                className="w-4 mr-36 text-red-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 14"
                fill="currentColor"
                role="button"
              >
                <path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z"></path>
              </svg>
              <h1 className=""> (3)سبد خرید </h1>
            </div>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <div className="flex flex-col px-3 mt-3 text-gray-700 space-y-3 ">
              <div  className="flex items-center justify-between">
                <h1>178000 تومان</h1>
                <h1>مجموع</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1>  15000تومان</h1>
                <h1>هزینه بسته بندی</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1>رایکان</h1>
                <h1>مالیات</h1>
              </div>
              <hr/>
              <div className="flex items-center justify-between">
                <h1>19300 تومان</h1>
                <h1 className="font-bold">قابل پرداخت</h1>
              </div>
            </div>
            <textarea placeholder="...توضیحات سفارش" className="text-right text-lg p-2 focus: outline-none focus:border-red-300 ml-8 mt-3 w-[250px] h-[100px] rounded-lg border border-gray-400"></textarea>
          </div>
        </div>
    </div>
  );
};

export default Orderpage;
