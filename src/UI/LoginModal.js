import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../Assets/svg-6.svg";

import Modal from "@mui/material/Modal";

const LoginModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const modalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
    <div className="fixed bg-gray-700 h-[100vh] w-screen inset-0 z-20 opacity-50 "></div>
      <div className="absolute top-[170px] left-[450px] z-50  ">
        <div className=" flex flex-col bg-white rounded-2xl z-30 w-[480px] px-3 py-4 ">
          <div className="flex flex-row justify-between">
            <img className="h-[30px]" src={logo} />
            <button onClick={modalClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-row-reverse justify-start font-iran space-x-2 mt-3 ">
            <h1 className="font-bold text-2xl text-[#3a3d42]">ورود</h1>{" "}
            <p className=" text-2xl text-[#3a3d42]"> یا </p>{" "}
            <h1 className="font-bold text-2xl text-[#3a3d42]">عضویت</h1>
          </div>
          <div className="mt-8">
            <form className="flex flex-col items-end space-y-1 font-iran">
              <label className="text-[#53565c] text-[16px]">
                شماره تلفن همراه
              </label>
              <input
                type="text"
                className="bg-[#e8f0fe] w-[430px] rounded-xl py-3"
              ></input>
              <p className="text-[#53565c] text-[12px]">
                شماره با 09 شروع میشود
              </p>
              <button
                className="text-white text-xl font-bold bg-[#ff00a6] rounded-xl w-[430px] py-3 "
                type="submit"
              >
                {" "}
                ادامه{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
