import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";

import { Post } from "../components/post";
import { NavBar } from "../components/navBar";
import { request } from "../helpers/context";

const Home: NextPage = () => {
	const [posts, setPosts] = React.useState<any>();


	useEffect(() => {
		request
			.get("/post/getAll")
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data)
					setPosts(response.data);
				}
			})
			.catch(console.error);
	}
		, [])



	if (posts) {
		return (
			<div className="font-sans min-h-screen bg-gray-900">
				<NavBar />

				<div className="flex flex-col items-center w-full h-full">
					<div className="items-center w-1/3 mt-20">
						{posts.map((post: any) => (
							<div
								key={post.id}
								className="flex flex-col w-full items-center my-5"
							>
								{post.pet ?
									<Post
										username={post.user.username}
										petName={post.pet.name}
										content={post.content}
									/>
									:
									<Post
										username={post.user.username}
										content={post.content}
									/>
								}

							</div>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="font-sans min-h-screen bg-gray-900">
				<p>Loading</p>
			</div>
		)
	}
};

export default Home;
