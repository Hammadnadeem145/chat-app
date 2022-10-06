import React from "react";
import { auth } from "../firebase";



const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
};
const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? "bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full"
      : `bg-[#e5e5ea] text-black float-left rounded-br-full`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className="absolute mt-[-4rem] tet-gray-600 text-xs">
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
