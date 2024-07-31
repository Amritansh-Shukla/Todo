
import React from 'react';
import './AnimatedHeading.css';

function AnimatedHeading(){
  return (
    <>
    <div className="flex items-center justify-center ">
      <h1 className="bg-grey-900 text-4xl font-bold text-white fade-in-up">
        Welcome in ToDo App !! Add Your Work for reference....
      </h1>
    </div>
    </>
  );
};

export default AnimatedHeading;
