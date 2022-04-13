import React from "react";

interface PostProps {
  userName: string;
  title?: string;
}

export class Post extends React.Component<PostProps> {
  render() {
    return (
      <div className="border-solid border-2 border-gray-700 bg-gray-800">
        <div className="flex flex-row items-center mb-3 mt-3">
          <img
            className="rounded-full ml-3 mr-3"
            src="https://picsum.photos/seed/1/500/500"
            width="40"
            height="40"
          />
          <p className="text-white text-l font-bold"> Johanens.Krabbe </p>
        </div>
        <img
          className=""
          src="https://picsum.photos/seed/2/500/500"
          alt=""
          max-height="600"
          width="500"
        />
        <p className="text-white my-2 ml-1">
          <span className="font-bold"> {this.props.userName} </span>{" "}
          {this.props.title}
        </p>
      </div>
    );
  }
}
