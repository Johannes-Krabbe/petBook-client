import React from "react";

interface PetProps {
	name: string;
	race: string;
	species: string;
	gender: string;
}

export const Pet: React.FC<PetProps> = ({ name, race, species, gender }) => {
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
			</div>
		</div>
	);
};
