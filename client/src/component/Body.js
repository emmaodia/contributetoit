import React from 'react';

const Body = () => {

  return (
    <>
    <section>
      <div className="flex flex-wrap mt-20">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400"><img src={require('../images/BlackManBlackWomanUsingLaptop.jpg')} alt="Black Woman Using Laptop illustration" /></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4">
          <div className="lg:w-4/12 px-4 ml-auto mb-6 text-center">
            <h2 className="font-extrabold  text-4xl">Create</h2>
            <h3 className=""></h3>
            <p className=""></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400">Contribute</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400"><img src={require('../images/BlackManandWomanWorkingonCalendar.jpg')} alt="Black Man and Woman Workingon Calendar illustration" /></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400"><img src={require('../images/TwoBlackMenUsingLaptop.jpg')} alt="Two Black Men Using Laptop illustration" /></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400">Consume</div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400">Critique</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-3/6 mb-4 bg-gray-400"><img src={require('../images/BlackMillennialsatOffice.jpg')} alt="Black Millennials at Office illustration" /></div>
      </div>
    </section>
    </>
  );
}

export default Body;
