import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { request } from "../../helpers/context";
import { NextPage } from "next";
import React from "react";
import { NavBar } from "../../components/navBar";
import Router, { useRouter } from "next/router";

const Register: NextPage = () => {
	const [createAccountMessage, setCreateAccountMessage] = React.useState("");

	const login = (
		username: string,
		name: string,
		email: string,
		password: string,
		bio: string
	) => {
		const profilePictureUrl = "";
		request
			.post("/user/createUser", {
				username,
				password,
				name,
				email,
				bio,
				profilePictureUrl,
			})
			.then((response) => {
				if (response.status === 200) {
					Router.push("/login");
				}
			})
			.catch((e) => {
				setCreateAccountMessage(e.response.data.message);
			});
	};

	return (
		<div>
			<NavBar />
			<div className="font-sans grid place-items-center h-screen bg-gray-900">
				<Formik
					initialValues={{
						username: "",
						password: "",
						repPassword: "",
						name: "",
						email: "",
						bio: "Hi, I am using PetBook",
					}}
					onSubmit={(arg) => {
						if (arg.password === arg.repPassword) {
							login(arg.username, arg.name, arg.email, arg.password, arg.bio);
						} else {
							setCreateAccountMessage(
								"Password and Repeat Password are not the same."
							);
						}
					}}
				>
					{({ handleSubmit, handleChange }) => (
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit(e);
							}}
						>
							<div className="flex flex-col">
								<div className="flex flex-col items-center">
									<div className="mb-3 items-center">
										<TextField
											name="username"
											label="Username"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="name"
											label="Name"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="email"
											label="Email"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="password"
											type="password"
											label="Password"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="repPassword"
											type="Password"
											label="Repeat Password"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="bio"
											label="Biography"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
								</div>
								<p className="h-5 mb-1 text-red-600 text-s text-center">
									{createAccountMessage}
								</p>
								<Button type="submit">Create Account</Button>
								<div className="items-center"></div>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Register;
