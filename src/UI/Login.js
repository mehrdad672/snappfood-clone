import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../Assets/svg-6.svg";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { firebaseapp } from "../firebase";
import {signin ,signup , signout } from '../Store/store'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = getAuth(firebaseapp);
  const isloggedin = useSelector((state) => state.auth.isloggedin);
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const signedupuser = userCredential.user;
        console.log(signedupuser);
        setEmail('')
    setPassword('')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setEmail(null)
    setPassword(null)
        // ..
      });

    setEmail(null)
    setPassword(null)
  };
  const signinHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const signedinuser = userCredential.user;
        // ...
        console.log(signedinuser);
        dispatch(signin());
        setEmail(null)
    setPassword(null)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setEmail(null)
    setPassword(null)
      });
     
  };
  const modalClose = () => {
    props.modalClose();
  };
  return (
    
    <Modal open={props.modalOpen} onClose={modalClose} disableAutoFocus>
      <div className="absolute top-[170px] left-[450px]  ">
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
            <form
              onSubmit={signupHandler}
              className="flex flex-col items-end space-y-1 font-iran"
            >
              <label className="text-[#53565c] text-[16px]">ایمیل </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="bg-[#e8f0fe] w-[430px] rounded-xl py-3 px-2 focus:outline-none"
              ></input>
              <label className="text-[#53565c] text-[16px]">رمزعبور </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="bg-[#e8f0fe] w-[430px] rounded-xl py-3 px-2 focus:outline-none mb-4"
              ></input>
              <br />
              <button
                className="text-white text-xl font-bold bg-[#ff00a6] rounded-xl w-[430px] py-3 mt-2 "
                type="submit"
              >
                عضویت
              </button>
            </form>
              <button
              onClick={signinHandler}
              className="text-white text-xl font-bold bg-[#ff00a6] rounded-xl w-[430px] py-3 mt-2 ml-6 "
              type="submit"
            >
              ورود
            </button>
           
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
