import React from 'react';
import './SendButton.css';

const SendButton = (props) => {
  return (
    <button className="send-button bg-cyan-300" onClick={props.onClick}>
      <div>
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="flex justify-center items-center max-md:w-5"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="white"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default SendButton;
