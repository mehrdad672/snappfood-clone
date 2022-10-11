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
      <div className=" font-iran bg-[#f9fafb] flex flex-row-reverse flex-wrap max-w-full  mx-8 justify-between items-start py-8 p-2">
        <div className="flex flex-row order-4  p-8">
          <img className="h-[80px]" src={senf} alt="senf" />
          <img className="h-[80px]" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col order-3 p-8 space-y-4 text-[#3a3d42] font-[12px] items-end justify-between text-[12px]">
          <a href="#">تماس با اسنپ فود</a>
          <a href="#">پرسش های متداول</a>
          <a href="#">ثبت شکایات</a>
          <a href="#">اپلیکیشن موبایل</a>
        </div>
        <div className="flex flex-col order-2 p-8 space-y-4 text-[#3a3d42] font-[12px] text-[12px]">
          <a href="#">درباره اسنپ فود</a>
          <a href="#">وبلاگ</a>
          <a href="#">قوانین سایت</a>
          <a href="#">حریم خصوصی</a>
          <a href="#">ثبت نام فروشندگان </a>
        </div>
        <div className="order-1 p-8">
          <div className="flex flex-row items-center justify-end">
            <div>
              <div className="flex flex-col items-end justify-center ">
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
          <div className="flex flex-row space-x-4 mt-4 mr-20">
            <div className="w-fit">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500" src={aparat} />
              </a>
            </div>
            <div className="w-fit ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500 " src={instagram} />
              </a>
            </div>
            <div className="w-fit ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500 " src={linkedin} />
              </a>
            </div><div className="w-fit ">
              <a className="bg-white" href="#">
                <img className="h-[40px] bg-white p-2 rounded-full border border-gray-500 " src={telegram} />
              </a>
            </div>
            <div className="w-fit ">
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
