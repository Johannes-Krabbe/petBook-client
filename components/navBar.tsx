import React from "react";

interface NavBarProps {}

export class NavBar extends React.Component<NavBarProps> {
  render() {
    return (
      <div className="border-solid border-2 border-gray-700 bg-gray-800">
        <div className="flex flex-col">
          <p className="text-white text-3xl font-bold my-5 ml-40">PetBook</p>
        </div>
      </div>
    );
  }
}
