import React from "react";
import Gif from "../../Components/Gif";
import useGlobalGifs from "../../Hooks/useGlobalGifs";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return (
    <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
