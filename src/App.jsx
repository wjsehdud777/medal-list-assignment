import { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

const App = () => {
  const [medals, setMedals] = useState([
    { country: "", gold: "0", silver: "0", bronze: "0" },
  ]);

  const [sortType, setSortType] = useState("gold");

  const handleDelete = (country) => {
    const updatedMedals = medals.filter((medal) => medal.country !== country);
    setMedals(updatedMedals);
  };

  const getSortedMedals = () => {
    if (sortType === "gold") {
      const sortedMedals = medals.sort((a, b) => b.gold - a.gold);
      return sortedMedals;
    } else {
      const sortedMedals = medals.sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      return sortedMedals;
    }
  };

  const sortedMedals = getSortedMedals();

  return (
    <div className="main-center">
      <h1 className="title">파리 올림픽 메달 집계현황!</h1>
      <div>
        <label>
          <input
            type="radio"
            value={"gold"}
            checked={sortType === "gold"}
            onChange={(e) => setSortType(e.target.value)}
          />
          금메달 순<label></label>
          <input
            type="radio"
            value="total"
            checked={sortType === "total"}
            onChange={(e) => setSortType(e.target.value)}
          />
          총 메달 순
        </label>
      </div>
      <MedalForm medals={medals} setMedals={setMedals} />
      <MedalList medals={sortedMedals} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
