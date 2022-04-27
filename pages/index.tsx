import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Post } from "../components/post";
import { NavBar } from "../components/navBar";

const Home: NextPage = () => {
	const testData = [
		{
			userName: "Johannes.Krabbe",
			petName: "Ernie",
			content: "My pet is the best!",
		},
		{
			userName: "Krabbe.Johannes",
			petName: "April",
			content: "I love my pet!! ".repeat(2000),
		},
	];
	return (
		<div className="font-sans min-h-screen bg-gray-900">
			<NavBar />

			<div className="flex flex-col items-center h-full">
				<div className="h-full w-2/4 border border-x-2 border-y-0 border-gray-700">
					<div className="items-center mt-20">
						{testData.map((post) => (
							<div
								key={post.userName}
								className="flex flex-col w-full items-center my-5"
							>
								<Post
									userName={post.userName}
									petName={post.petName}
									content={post.content}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
