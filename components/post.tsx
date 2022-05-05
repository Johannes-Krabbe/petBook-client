import React from "react";

interface PostProps {
	userName: string;
	petName: string;
	content: string;
}

export const Post: React.FC<PostProps> = ({ userName, content, petName }) => {
	return (
		<div className="w-full bg-gray-800">
			<div className="flex flex-row items-center mb-3 mt-3">
				<p className="text-gray-500 text-sm ml-5">
					<span className="text-white font-bold text-xl">{petName} </span> from{" "}
					{userName}
				</p>
			</div>
			<p className="text-white my-3 mx-5">{content}</p>
		</div>
	);
};
