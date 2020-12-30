import React from "react";

const Body = () => {
  return (
    <>
      <div className="flex flex-rowx justify-between items-center mt-20">
        <div className="w-full">
          <img
            src={require("../images/BlackManBlackWomanUsingLaptop.jpg")}
            alt="Black Woman Using Laptop illustration"
          />
        </div>
        <div className="w-full">
          <div class="border-solid border-2 rounded-lg border-light-blue-500">
            <div className="text-center inline-block align-middle m-16 font-mono">
              This is a platform where Open Source creators can add their
              projects and everyone can "Contribute to it"
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          Add your Project to the list, find a Project to "Contribute to it!"
        </p>
      </div>
    </>
  );
};

export default Body;

/**
 * This is a platform where Open Source creators can add the projects and everyone can "Contribute to it"
 *
 * Add your Project to the list, find a Project to "Contribute to it!"
 */
