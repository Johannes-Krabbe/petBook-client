import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { request } from "../../helpers/context";
import { NextPage } from "next";
import React from "react";
import { NavBar } from "../../components/navBar";
import Router, { useRouter } from "next/router";

const createPet: NextPage = () => {
	const [createAccountMessage, setCreateAccountMessage] = React.useState("");

	const create = (
		name: string,
		species: string,
		race: string,
		gender: string
	) => {
		request
			.post("/pet/create", {
				name,
				species,
				race,
				gender,
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
	return (
		<div>
			<NavBar />
			<div className="font-sans grid place-items-center h-screen bg-gray-900">
				<Formik
					initialValues={{
						name: "",
						species: "",
						race: "",
						gender: "",
					}}
					onSubmit={(arg) => {
						create(arg.name, arg.species, arg.race, arg.gender);
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
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="species"
											label="Species"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="race"
											label="Race"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
									<div className="mb-3 items-center">
										<TextField
											name="gender"
											label="Gender"
											variant="outlined"
											onChange={handleChange}
										></TextField>
									</div>
								</div>
								<p className="h-5 mb-1 text-red-600 text-s text-center">
									{createAccountMessage}
								</p>
								<Button type="submit">Create Pet</Button>
								<div className="items-center"></div>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default createPet;
