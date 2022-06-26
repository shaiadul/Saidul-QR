import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  return (
    <>
      <div className="">
        <h1 className="text-center text-6xl text-gray-600 bg-gradient-to-r from-green-300 to-indigo-400 pb-2">SCREEN YOUR QR HERE</h1>
        <br />
        <div className="flex justify-center align-middle">
          <QRCode value={qrValue ? qrValue : "ERROR!"} size={300}></QRCode>
        </div>
        <div className="flex justify-center align-middle mt-4">
          <br />
          <input
            className="w-80 p-3  border-4  input-style bg-gray-200 outline-none"
            placeholder="Enter Your Text Here!"
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
              console.log(setInput);
            }}
          />
        </div>
        <br />
        <div className="flex justify-center align-middle ">
           <button
          className=" w-80 p-3 text-4xl border-4 border-emerald-700 bg-green-300 rounded"
          onClick={() => {
            setQrValue(input);
          }}
        >
          GENERATE QR CODE
        </button>
        </div>
       
      </div>
    </>
  );
};

export default QrCode;
