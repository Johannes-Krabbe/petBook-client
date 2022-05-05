import React, { useEffect, useState } from "react";
import { request } from "../helpers/context";
import { deleteCookie } from "../helpers/cookieHelper";

import Router from "next/router";

import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";


export const NavBar = () => {
	const [userName, setUserName] = useState("");

	const logout = () => {
		deleteCookie("pb_jwt");
		Router.push("/");
	};

	useEffect(() => {
		request
			.get("/user/getMe")
			.then((response) => {
				if (response.status === 200) {
					setUserName(response.data.username);
				}
			})
			.catch((e) => {
				console.error(e)
			});
	});

	return (
		<div className="border-solid border-2 border-gray-700 bg-gray-800">
			<div className="flex flex-row w-full h-20 items-center">
				<p className="text-white text-3xl font-bold ml-40 w-full">
					<a href="/">PetBook</a>
				</p>
				<div className="flex flex-row-reverse">
					{userName ? (
						<div className="flex flex-row items-center text-white text-xl text-right font-bold mr-10">
							<a className="mr-10" href="/me/pets">
								Pets
							</a>
							<a className="mr-4" href="/me">
								{userName}
							</a>
							<IconButton size="small" onClick={() => logout()}>
								<LogoutIcon />
							</IconButton>
						</div>
					) : (
						<p className="text-white text-xl text-right font-bold mr-20">
							<a href="/login"> Login </a>
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
