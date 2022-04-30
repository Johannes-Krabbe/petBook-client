import React from "react";

import { TextField, Button } from "@mui/material";

import { Formik } from "formik";
import { request } from "../helpers/context";
import Router, { useRouter } from "next/router";

interface PetProps {
	name: string;
	race: string;
	species: string;
	gender: string;
	uuid: string;
}

export const Pet: React.FC<PetProps> = ({
	name,
	race,
	species,
	gender,
	uuid,
}) => {
	const [createPostMessage, setCreatePostMessage] = React.useState("");
	const router = useRouter();

	const createPost = (content: string) => {
		request
			.post("/pet/createPost", {
				petUuid: uuid,
				content,
			})
			.then((response) => {
				if (response.status === 200) {
					setCreatePostMessage("successfully created new Post!");
					router.push("/");
				}
			})
			.catch((e) => {
				setCreatePostMessage("something went wrong");
			});
	};

	return (
		<div className="flex flex-col items-center mt-20 w-full">
			<div className="border-solid border-2 text-white border-gray-700 bg-gray-800 w-1/3">
				<div className="flex flex-row my-3 ml-3 text-m">
					<p className="font-bold">Name:&nbsp;&nbsp;</p>
					<p> {name}</p>
				</div>
				<div className="flex flex-row my-3 ml-3 text-m">
					<p className="font-bold">Race:&nbsp;&nbsp;</p>
					<p> {race}</p>
				</div>
				<div className="flex flex-row my-3 ml-3 text-m">
					<p className="font-bold">Species:&nbsp;&nbsp;</p>
					<p> {species}</p>
				</div>
				<div className="flex flex-row my-3 ml-3 text-m">
					<p className="font-bold">Gender:&nbsp;&nbsp;</p>
					<p> {gender}</p>
				</div>
				<Formik
					initialValues={{
						content: "",
					}}
					onSubmit={(arg) => {
						createPost(arg.content);
					}}
				>
					{({ handleSubmit, handleChange }) => (
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit(e);
							}}
						>
							<div className="flex flex-col my-3 mx-5">
								<TextField
									id="standard-multiline-flexible"
									multiline
									name="content"
									label="New Post"
									variant="standard"
									onChange={handleChange}
								></TextField>
								<p className="h-5 my-2 text-white text-s text-center">
									{createPostMessage}
								</p>
								<Button type="submit">Post</Button>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};
