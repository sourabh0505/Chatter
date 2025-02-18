import React from "react";
import handshakeImg from '../assets/images/handshake-img.svg';
import UserAuthenticationForm from "../components/UserAuthenticationForm";

function Login() {
  return (
    <div className="login-container h-[100vh] w-full grid grid-cols-3">
      <div className="left-container relative bg-gradient-to-b from-[#82bdf5] via-[#217bcf] to-[#01234f]
 h-screen col-span-1 flex flex-col justify-around text-center">
        <img
          src={handshakeImg}
          alt="Handshake"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <h1 className="text-[32px] text-white font-[600] relative">Chatter</h1>
        <h1 className="text-[32px] text-white font-[600] relative">
          Bringing Conversations <br /> to Life!
        </h1>
      </div>

      <div className="right-container bg-white h-screen col-span-2">
        <UserAuthenticationForm/>
      </div>
    </div>
  );
}

export default Login;
