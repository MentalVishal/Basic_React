import React, { useEffect, useState } from "react";
import axios from "axios";
import { CharacterCard } from "./CharacterCard";
import { Grid } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}?_limit=12
    `)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.log(err));
  }, [page]);

  const handelNext = () => {
    setPage(page + 1);
  };
  const handelPrev = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2%",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <label>Filter By Status</label>
        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>

        <label>Filter By Gender</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <center>
        <h1>All Characters</h1>
      </center>
      <Grid templateColumns="repeat(3,1fr)" gap={4}>
        {Data.length > 0 &&
          Data.map((el) => {
            return <CharacterCard key={el.id} {...el} />;
          })}
      </Grid>

      <button disabled={page <= 1} onClick={handelPrev}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={handelNext}>Next</button>
    </div>
  );
};
