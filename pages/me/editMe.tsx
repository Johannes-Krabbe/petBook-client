import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { request } from "../../helpers/context";
import { NextPage } from "next";
import React from "react";
import { NavBar } from "../../components/navBar";
import Router from "next/router";

const editMe: NextPage = () => {
	const [createAccountMessage, setCreateAccountMessage] = React.useState("");
	const [user, setUser] = React.useState<any>();



	const edit = (
		name: string,
		username: string,
		email: string,
	) => {
		request
			.post("/user/edit", {
				name,
				username,
				email
			})
			.then((response) => {
				if (response.status === 200) {
					Router.push("/me/");
				}
			})
			.catch((e) => {
				setCreateAccountMessage(e.response.data.message);
			});
	};
	/**
				{
						"name" : "johannes.krabbe",
						"species" : "foo@bar.net",
						"race" : "Johannes Krabbe",
						"gender" : "I am Johannes, 19, from Berlin",
				}
				*/

	if (user) {
		return (
			<div>
				<NavBar />
				<div className="font-sans grid place-items-center h-screen bg-gray-900">
					<Formik
						initialValues={{
							name: user.name,
							username: user.username,
							email: user.email,
						}}
						onSubmit={(arg) => {
							edit(arg.name, arg.username, arg.email);
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
												name="name"
												label="Name"
												variant="outlined"
												onChange={handleChange}
												defaultValue={user.name}
											></TextField>
										</div>
										<div className="mb-3 items-center">
											<TextField
												name="username"
												label="Username"
												variant="outlined"
												onChange={handleChange}
												defaultValue={user.username}
											></TextField>
										</div>
										<div className="mb-3 items-center">
											<TextField
												name="email"
												label="Email"
												variant="outlined"
												onChange={handleChange}
												defaultValue={user.email}
											></TextField>
										</div>
									</div>
									<p className="h-5 mb-1 text-red-600 text-s text-center">
										{createAccountMessage}
									</p>
									<Button type="submit">Save</Button>
									<div className="items-center"></div>
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		);
	} else {
		request
			.get("/user/getMe/")
			.then((response) => {
				if (response.status === 200) {
					setUser(response.data);
				}
			})
			.catch(console.error);
		return (
			<div className="font-sans min-h-screen bg-gray-900">
				<p>Loading</p>
			</div>
		)
	}
};

export default editMe
