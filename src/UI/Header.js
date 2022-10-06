import svg1 from "../Assets/1.svg";
import zarebin from "../Assets/svg-gobbler.svg";
import snapsvg from "../Assets/svg-6.svg";
import banner from "../Assets/banner.png";
import Slider from "./Slider";
import Menu from "./menu";
import Login from "./Login";
import { useRef } from "react";
const Header = () => {
  const kabab = useRef(null);
  const irani = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const clickhandler = () => {
    console.log("clicked");
  };
  return (
    <div className=" flex flex-col space-y-36 items-center bg-[#f9fafb] h-[700px] max-w-full m-9 p-9 rounded-br-[100px]">
      <div className=" w-full  max-w-full bg-[#f9fafb] ">
        <div className="bg-[#f9fafb] ">
          <div className="flex flex-row items-center justify-between bg-[#f9fafb] md:flex-row ">
            <div className="flex flex-row bg-[#f9fafb] space-x-2 items-center ">
              <button className="font-iran bg-[#ff00a6] rounded-lg p-3 text-xl  text-white font-bold hover:bg-[#ff33a6] flex mr-2">
                ورود یا عضویت
              </button>
              <a
                className=" font-iran bg-[#f9fafb] text-[#3a3d42]  flex"
                href="#"
              >
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
            <div className="">
              <img className="" src={snapsvg}></img>
            </div>
          </div>
        </div>

        <img
          className="left-[-136px] md:left-[-36px] lg:left-[36px] absolute top-[120px] "
          src={banner}
        ></img>
      </div>
      <div className="justify-end items-end flex flex-col bg-[#f9fafb] w-full max-w-full">
        <div className="flex flex-col   bg-[#f9fafb] max-w-full ">
          <div className=" relative flex flex-row items-center justify-center space-x-3 mr-8">
            <Slider />
            <h1 className="font-iran text-[#3a3d42] text-5xl font-bold">
              سفارش آنلاین
            </h1>
          </div>
          <div className="font-iran flex py-2 text-left">
            <p>...سفارش آنلاین غذا، میوه، نان، شیرینی و </p>
          </div>
          <div ref={irani} className="rounded-full bg-white p-1 pl-2">
            <button onClick={clickhandler}>
              <div className="space-x-2 font-iran flex flex-row justify-end items-center">
                <button className="font-iran rounded-full bg-[#ff00a6] p-2 mr-4">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="white">
                    <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z" />
                  </svg>
                </button>
                <input className="ml-3"
                  type="text"
                  placeholder=".ابتدا آدرستان را انتخاب کنید"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  viewBox="0 0 12 14"
                  fill="gray"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.11216 9.2305C10.8115 7.50007 10.8115 4.7073 9.11216 2.97687C7.39661 1.22993 4.60338 1.22993 2.88783 2.97687C1.18849 4.7073 1.18849 7.50007 2.88783 9.2305L5.89303 12.2907C5.91798 12.3161 5.95396 12.3333 5.99999 12.3333C6.04603 12.3333 6.08201 12.3161 6.10696 12.2907L9.11216 9.2305ZM10.0069 10.1839C12.2199 7.93048 12.2199 4.27689 10.0069 2.02343C7.79396 -0.230038 4.20603 -0.230038 1.99306 2.02343C-0.219915 4.27689 -0.219915 7.93048 1.99306 10.1839L4.99826 13.2441C5.5515 13.8075 6.44849 13.8075 7.00173 13.2441L10.0069 10.1839Z"
                    fill="var(--sf-inactive-dark)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99999 4.89127C5.29867 4.89127 4.77999 5.46244 4.77999 6.10368C4.77999 6.74492 5.29867 7.3161 5.99999 7.3161C6.70132 7.3161 7.22 6.74492 7.22 6.10368C7.22 5.46244 6.70132 4.89127 5.99999 4.89127ZM5.99999 3.55794C4.61928 3.55794 3.49999 4.69771 3.49999 6.10368C3.49999 7.50966 4.61928 8.64943 5.99999 8.64943C7.38071 8.64943 8.5 7.50966 8.5 6.10368C8.5 4.69771 7.38071 3.55794 5.99999 3.55794Z"
                    fill="var(--sf-inactive-dark)"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Menu />
      <Login />
    </div>
  );
};
export default Header;
