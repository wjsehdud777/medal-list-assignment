/* eslint-disable no-unused-vars */
import React from "react";

const MedalItem = ({ medal, handleDelete }) => {
  return (
    <li>
      <span>{medal.country}</span>
      <span>🥇 {medal.gold}</span>
      <span>🥈 {medal.silver}</span>
      <span>🥉 {medal.bronze}</span>
      <button onClick={() => handleDelete(medal.country)}>삭제하기</button>
    </li>
  );
};

export default MedalItem;
