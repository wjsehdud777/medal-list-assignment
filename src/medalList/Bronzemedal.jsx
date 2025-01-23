import { useState } from "react";

const BRONZE_MEDAL = [
  {
    id: 1,
    text: "동메달",
  },
];

const BronzeMedal = () => {
  const [broze, setBroze] = useState(BRONZE_MEDAL);

  const [newBroze, setNewBroze] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newBroze.trim()) {
      return;
    }

    setBroze([{ id: crypto.randomUUID(), text: newBroze }, ...broze]);
    setNewBroze("");
  };
  const handleInputChange = (e) => {
    setNewBroze(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={newBroze}
          onChange={handleInputChange}
          placeholder="대한민국 짱!"
        />
        <button type="submit">국가 추가</button>
      </form>
      <ul>
        {broze.map((brozes) => (
          <li key={brozes.id}>{brozes.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default BronzeMedal;
