import BronzeMedal from "./medalList/Bronzemedal";
import GoldMedal from "./medalList/GoldMedal";
import SilverMedal from "./medalList/SilverMedal";
import Country from "./medalList/CountryName";

const fontstyle = {
  fontSize: "35px",
  fontWeight: "bold",
  color: "navy",
};

const App = () => {
  return (
      <main className="main-center">
        <header style={fontstyle}>2024 파리 올림픽</header>
        <Country />
        <GoldMedal />
        <SilverMedal />
        <BronzeMedal />
      </main>
  );
};

export default App;
