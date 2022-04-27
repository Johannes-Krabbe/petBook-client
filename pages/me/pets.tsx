import type { NextPage } from "next";
import React, { useEffect } from "react";

import { NavBar } from "../../components/navBar";
import { Pet } from "../../components/pet";
import { request } from "../../helpers/context";

const Pets: NextPage = () => {
	const [pets, setPets] = React.useState<any[]>();
	useEffect(() => {
		request
			.get("/pet/getmine")
			.then((response) => {
				if (response.status === 200) {
					setPets(response.data);
				}
			})
			.catch(console.error);
	}, []);

	if (pets) {
		console.log(pets);
		return (
			<div className="font-sans min-h-screen bg-gray-900">
				<NavBar />

				<div className="flex flex-col items-center h-full">
					<div className="h-full w-2/4">
						{pets.map((pet) => (
							<div key={pet.id}>
								<Pet
									name={pet.name}
									species={pet.species}
									race={pet.race}
									gender={pet.gender}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return <p>Loading</p>;
	}
};

export default Pets;
