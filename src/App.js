import "./App.css";
import React from "react";
import CommentSection from "./comment.js";


function App() {
  return (
    <div className="App font-sans flex flex-col min-h-screen">
      <nav className="flex items-center justify-between flex-wrap bg-red-800 p-6">
      <img src="/cmu_logo.jpeg" alt="CMU Logo" className="h-12 opacity-80" />
      </nav>
      <h1 className="text-4xl md:text-6xl text-center text-blue-500 p-4 font-bold">
        Your Ideas Matter
      </h1>
      <div className="container p-4 md:p-10 flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 relative mb-4 md:mb-0">
          <div className="relative">
            <img
              src="/cmu_building.jpeg"
              className="w-full h-auto"
              alt="building"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  Carnegie Mellon University
                </h2>
                <p className="text-lg md:text-xl text-gray-300">Africa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 text-justify">
          <div className="mb-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A thriving school community values every student's input,
              regardless of their personality. We believe in fostering an
              inclusive environment where every idea, no matter how introverted
              the student, contributes to our collective growth. Your unique
              perspective and ideas are invaluable to us, and we are here to
              listen and learn from you.
            </p>
          </div>
          <CommentSection />
        </div>
      </div>
      <div className="footer bg-red-800 p-6 text-white">
        <div className="container mx-auto text-center font-bold">
          <p className="mb-2">Paid for by the CMU Student Government</p>
          <p>© 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
