import React, { useEffect, useState } from "react";
import { request } from "../helpers/context";
import { deleteCookie } from "../helpers/cookieHelper";

import Router from "next/router";

import LogoutIcon from "@mui/icons-material/Logout";
import PetsIcon from "@mui/icons-material/Pets";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
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
							<div className="ml-3">
								<IconButton size="small" onClick={() => Router.push("/me/pets")}>
									<PetsIcon />
								</IconButton>
							</div>

							<div className="ml-3">
								<IconButton size="small" onClick={() => Router.push("/me/")}>
									<PersonIcon />
								</IconButton>
							</div>

							<div className="ml-3">
								<IconButton size="small" onClick={() => Router.push("/me/editMe")}>
									<SettingsIcon />
								</IconButton>
							</div>

							<div className="ml-3">
								<IconButton size="small" onClick={() => logout()}>
									<LogoutIcon />
								</IconButton>
							</div>
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
