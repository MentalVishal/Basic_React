import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";

export const SinglePage = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  console.log(id);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}
    `)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(Data);

  if (!Data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <center>
        <h1>SinglePage</h1>
      </center>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width: "30%",
          margin: "auto",
          padding: "10px",
        }}
      >
        <img src={Data.image} alt="image" />
        <h1>Name : {Data.name}</h1>
        <h2>Status : {Data.status}</h2>
        <h2>Species : {Data.species}</h2>
        <h2>Type : {Data.type}</h2>
        <h2>Gender : {Data.gender}</h2>
        <h2>Origin : {Data?.origin?.name}</h2>
        <h2>Location : {Data?.location?.name}</h2>
      </div>
    </div>
  );
};
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
