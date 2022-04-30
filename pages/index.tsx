import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

import { Post } from "../components/post";
import { NavBar } from "../components/navBar";
import { request } from "../helpers/context";

const Home: NextPage = () => {
	const [posts, setPosts] = React.useState<any>();

	if (posts) {
		return (
			<div className="font-sans min-h-screen bg-gray-900">
				<NavBar />

				<div className="flex flex-col items-center h-full">
					<div className="h-full w-2/4 border border-x-2 border-y-0 border-gray-700">
						<div className="items-center mt-20">
							{posts.map((post: any) => (
								<div
									key={post.userName}
									className="flex flex-col w-full items-center my-5"
								>
									<Post
										userName={post.pet.owner.name}
										petName={post.pet.name}
										content={post.content}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		request
			.get("/pet/getAllPosts")
			.then((response) => {
				if (response.status === 200) {
					setPosts(response.data.reverse());
				}
			})
			.catch(console.error);
		return <p>Loading</p>;
	}
};

export default Home;
