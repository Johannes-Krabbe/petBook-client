import { useState } from "react";
import { connect } from "react-redux";
import { setInfo } from "../../redux/actions/main";
import { request } from "../../helpers/context";
import React from "react";

function Home(props: any) {
  const [users, setUsers] = React.useState([]);

  request
    .get("/user/getUsers")
    .then((response) => {
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch((e) => {});

  return (
    <div>
      {users.length != 0 ? (
        users.map((data: any) => {
          return <ul>{data.username}</ul>;
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Home;
