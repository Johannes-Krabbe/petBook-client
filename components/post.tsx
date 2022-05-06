import React from "react";

interface PostProps {
	username: string;
	content: string;
	petName?: string;
}

export const Post: React.FC<PostProps> = ({ username, content, petName }) => {
	return (
		<div className="w-full bg-gray-800">
			<div className="flex flex-row items-center mb-1 mx-3">
				{petName ?
					<p className="text-gray-500 text-sm mt-3">
						<span className="text-white font-bold text-xl">{petName} </span> from{" "}
						{username}
					</p>
					:
					<p className="mt-2">
						<span className="text-white font-bold text-xl">{username}</span>
					</p>
				}

			</div>
			<p className="text-white mb-3 mx-3">{content}</p>
		</div>
	);
};
