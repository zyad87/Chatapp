import React from 'react';
import NavBar from '../components/NavBar';
import landingImage from '../assets/landingImage.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <NavBar title="Chat Now" link="./chat" color="text-blue-600" />
      <div className="relative w-full h-full min-h-screen flex items-center overflow-hidden">
        {/* خلفية متدرجة بألوان حصرية */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-400 to-blue-500"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>

        {/* محتوى الصفحة */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto p-10 gap-10 lg:gap-20">
          {/* الصورة مع تأثير الطفو */}
          <img
            src={landingImage}
            className="w-full max-w-sm lg:max-w-md rounded-lg  transform animate-float"
            alt="Landing"
          />

          {/* النص وزر الدعوة إلى الفعل */}
          <div className="text-center lg:text-left bg-white bg-opacity-80 p-10 rounded-xl shadow-lg backdrop-blur-md">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-800 mb-6">
              Let's Chat
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium mb-8">
              Experience instant messaging like never before with Let's Chat. Connect seamlessly between two mobile devices and enjoy real-time conversations.
            </p>
            <Link to="/chat">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                Start Chatting
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default LandingPage;
