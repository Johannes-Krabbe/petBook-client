import { request } from "../../helpers/context";
import React, { useEffect } from "react";
import { NextPage } from "next";
import { NavBar } from "../../components/navBar";
import { Post } from "../../components/post";

const Me: NextPage = () => {
	const [user, setUsers] = React.useState<any>();


	useEffect(() => {
		request
			.get("/user/getMe")
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data)
					setUsers(response.data);
				}
			})
			.catch(console.error);
	}
		, [])

	if (user) {
		return (
			<div className="font-sans min-h-screen bg-gray-900">
				<NavBar></NavBar>

				<div className="flex flex-col items-center mt-10 w-full">
					<div className="flex flex-row mt-3 ml-3">
						<p className="text-white text-3xl font-bold"> {user.name}</p>
					</div>
					<div className="flex flex-row mt-1 ml-3">
						<p className="text-xl text-gray-500">{user.username}</p>
					</div>
					<div className="text-white mt-10 bg-gray-800 w-1/3">
						<div className="flex flex-row my-3 ml-3 text-gray-500">
							<p>Biography</p>
						</div>
						<div className="flex flex-row my-3 ml-3 text-2xl">
							<p> {user.bio}</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center mt-10 w-full font-sans">
					<div className="w-1/3">
						<p className="text-white text-xl font-bold"> Recent Posts </p>
						{user.posts.map((post: any) => (
							<div
								key={post.id}
								className="flex flex-col w-full my-3 bg-gray-800"
							>
								<div className="flex flex-row mx-3 ">
									{post.pet ?
										<p className="text-gray-500 text-sm mt-3">
											<span className="text-white font-bold text-xl">{post.pet.name} </span> from{" "}
											{user.username}
										</p>
										:
										<p className="text-gray-500 mt-2">
											<span className="text-sm">{user.username}</span>
										</p>
									}
								</div>
								<p className="text-white my-3 mx-3 text-2xl">{post.content}</p>
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

export default Me;
