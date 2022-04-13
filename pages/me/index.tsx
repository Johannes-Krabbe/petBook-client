import { useState } from "react";
import { connect } from "react-redux";
import { setInfo } from "../../redux/actions/main";
import { request } from "../../helpers/context";
import React from "react";
import { NextPage } from "next";
import { NavBar } from "../../components/navBar";

const Me: NextPage = () => {
  const [user, setUsers] = React.useState<any>();

  if (user) {
    return (
      <div className="font-sans h-screen bg-gray-900">
        <NavBar></NavBar>

        <div className="flex flex-col items-center mt-20 w-full">
          <div className="border-solid border-2 text-white border-gray-700 bg-gray-800 w-1/3">
            <p className="mt-3 mb-6 ml-3 font-bold text-3xl">
              Hello {user.name}
            </p>
            <div className="flex flex-row my-3 ml-3 text-m">
              <p className="font-bold">Username:&nbsp;&nbsp;</p>
              <p> {user.username}</p>
            </div>
            <div className="flex flex-row my-3 ml-3 text-m">
              <p className="font-bold">Bio:&nbsp;&nbsp;</p>
              <p> {user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    request
      .get("/user/getMe")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((e) => {});
    return <p>Loading</p>;
  }
};

export default Me;
