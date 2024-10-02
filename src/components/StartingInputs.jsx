import React from 'react';
import styles from './StartingInputs.module.css';

function StartingInputs(props) {
  return (
    <div className="flex flex-col gap-5 lg:text-2xl justify-center items-center w-[50%] p-5 max-md:w-[80%] bg-white bg-opacity-80 rounded-lg shadow-md my-5">
      <div className="flex flex-col gap-3 lg:text-2xl w-[100%] max-md:w-[100%]">
        <label className="text-gray-600 font-bold">
          Enter Name for 1st phone
        </label>
        <input
          type="text"
          name="text"
          className={`${styles.input} placeholder-gray-600 text-black bg-gray-200 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Phone Name 1"
          value={props.input1}
          onChange={(e) => props.setInput1(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onStartChat();
            }
          }}
        />
        <label className="text-red-500 text-base font-semibold">
          {props.invalidInput1}
        </label>
      </div>
      <div className="flex flex-col gap-3 lg:text-2xl w-[100%] max-md:w-[100%]">
        <label className="text-gray-600 font-bold">
          Enter Name for 2nd phone
        </label>
        <input
          type="text"
          name="text"
          className={`${styles.input} placeholder-gray-600  text-black bg-gray-200 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Phone Name 2"
          value={props.input2}
          onChange={(e) => props.setInput2(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onStartChat();
            }
          }}
        />
        <label className="text-red-500 text-base font-semibold">
          {props.invalidInput2}
        </label>
      </div>

      <button
        className="btn btn-active bg-blue-500 hover:bg-blue-700 text-white  text-xl max-md:w-[60%] rounded-lg p-3 transform hover:scale-105 transition-transform duration-300"
        onClick={props.onStartChat}
      >
        Chat Now
      </button>
    </div>
  );
}

export default StartingInputs;
