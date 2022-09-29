import senf from "./Assets/senf.png";
import logo from "./Assets/logo.png";
import snapsvg from "./Assets/svg-6.svg";
import aparat from "./Assets/aparat.svg";
import instagram from "./Assets/insta.svg";
import linkedin from "./Assets/linkedin.svg";
import telegram from "./Assets/telegram.svg";
import twitter from "./Assets/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f9fafb] flex flex-row max-w-full m-8 p-2">
        <div className="flex flex-row">
          <img className="h-[80px]" src={senf} alt="senf" />
          <img className="h-[80px]" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col space-y-4 text-[#3a3d42] font-[12px] items-end ml-36 justify-between text-[12px]">
          <a href="#">تماس با اسنپ فود</a>
          <a href="#">پرسش های متداول</a>
          <a href="#">ثبت شکایات</a>
          <a href="#">اپلیکیشن موبایل</a>
        </div>
        <div className="flex flex-col space-y-4 text-[#3a3d42] font-[12px] items-end ml-36 justify-between text-[12px]">
          <a href="#">درباره اسنپ فود</a>
          <a href="#">وبلاگ</a>
          <a href="#">قوانین سایت</a>
          <a href="#">حریم خصوصی</a>
          <a href="#">ثبت نام فروشندگان </a>
        </div>
        <div className="ml-[100px] ">
          <div className="flex flex-row ml-44">
            <div>
              <div className="flex flex-col justify-end items-end ">
                <h1 className="text-[#ff00a6] text-2xl font-bold">اسنپ فود</h1>
                <p className="text-[#53565c] text-sm mt-2">
                  تجربه سفارش غذا از زودفود تا اسنپ فود
                </p>
              </div>
            </div>
            <div className="flex mt-3 ml-3">
              <img className="h-[41px]" src={snapsvg} alt="snapp" />
            </div>
          </div>
          <div className="flex flex-row space-x-4 ml-[130px] mt-4">
            <div className="w-fit  ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500" src={aparat} />
              </a>
            </div>
            <div className="w-fit  ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500 " src={instagram} />
              </a>
            </div>
            <div className="w-fit  ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500 " src={linkedin} />
              </a>
            </div><div className="w-fit  ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500 " src={telegram} />
              </a>
            </div>
            <div className="w-fit  ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-3 border border-gray-500 rounded-full " src={twitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
