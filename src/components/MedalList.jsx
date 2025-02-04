/* eslint-disable no-unused-vars */
import React from "react";
import MedalItem from "./MedalItem";

export default function MedalList({ medals, handleDelete }) {
  return (
    <ul className="medal-list">
      {medals.map((medal) => (
        <MedalItem
          key={medal.country}
          medal={medal}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
