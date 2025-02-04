import React, { useState } from "react";

const MedalForm = ({ medals, setMedals }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const resetForm = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedal = {
      country: country,
      gold: parseInt(gold),
      silver: parseInt(silver),
      bronze: parseInt(bronze),
    };

    setMedals([...medals, newMedal]);
    resetForm();
  };

  const handleUpdate = () => {
    const existingMel = medals.find((medal) => medal.country === country);
    if (existingMel) {
      const updatedMedals = medals.map((medal) => {
        if (medal.country === country) {
          const newMedal = {
            country: country,
            gold: parseInt(gold),
            silver: parseInt(silver),
            bronze: parseInt(bronze),
          };
          return newMedal;
        } else {
          return medal;
        }
      });

      setMedals(updatedMedals);
      resetForm();

      alert("집계현황 반영 완료!");
    } else {
      alert("등록된 국가가 아닙니다!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="medal-form">
      <label className="label_style">
        나라이름
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="나라 이름을 입력해주세요"
          required
        />
      </label>
      <label className="label_style">
        금메달
        <input
          type="number"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          placeholder="메달 개수를 입력해주세요"
          required
          min="0"
          max="99"
        />
      </label>
      <label className="label_style">
        은메달
        <input
          type="number"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          placeholder="메달 개수를 입력해주세요"
          required
          min="0"
          max="99"
        />
      </label>
      <label className="label_style">
        동메달
        <input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
          placeholder="메달 개수를 입력해주세요"
          required
          min="0"
          max="99"
        />
      </label>
      <button type="submit">추가하기</button>
      <button type="button" onClick={handleUpdate}>
        업데이트
      </button>
    </form>
  );
};

export default MedalForm;
