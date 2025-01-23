import { useState } from "react";

const SILVER_MEDAL = [
  {
    id: 1,
    text: "은메달",
  },
];

const SilverMedal = () => {
  const [silver, setsilver] = useState(SILVER_MEDAL);

  const [newsilver, setNewsilver] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newsilver.trim()) {
      return;
    }

    setsilver([{ id: crypto.randomUUID(), text: newsilver }, ...broze]);
    setNewsilver("");
  };
  const handleInputChange = (e) => {
    setNewsilver(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={newsilver}
          onChange={handleInputChange}
          placeholder="대한민국 짱!"
        />
        {/* <button type="submit">국가 추가</button> */}
      </form>
      <ul>
        {silver.map((silvers) => (
          <li key={silvers.id}>{silvers.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default SilverMedal;
