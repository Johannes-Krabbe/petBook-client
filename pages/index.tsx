import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Post } from "../components/post";
import { NavBar } from "../components/navBar";

const Home: NextPage = () => {
  return (
    <div className="font-sans h-screen bg-gray-900">
      <NavBar />
      <div className="flex flex-col items-center mt-20">
        <Post userName="Johannes.Krabbe" title="my new setup" />
      </div>
    </div>
  );
};

export default Home;
