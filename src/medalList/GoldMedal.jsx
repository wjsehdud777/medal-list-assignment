import { useState } from "react";

const GOLD_MEDAL = [
  {
    id: 1,
    text: "금메달",
  },
];

const GoldMedal = () => {
  const [gold, setgold] = useState(GOLD_MEDAL);

  const [newgold, setNewgold] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newgold.trim()) {
      return;
    }

    setgold([{ id: crypto.randomUUID(), text: newgold }, ...gold]);
    setNewgold("");
  };
  const handleInputChange = (e) => {
    setNewgold(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={newgold}
          onChange={handleInputChange}
          placeholder="대한민국 짱!"
        />
        {/* <button type="submit">국가 추가</button> */}
      </form>
      <ul>
        {gold.map((gold) => (
          <li key={gold.id}>{gold.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default GoldMedal;
