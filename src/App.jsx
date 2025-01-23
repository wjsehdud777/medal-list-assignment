import BronzeMedal from "./medalList/Bronzemedal";
import GoldMedal from "./medalList/GoldMedal";
import SilverMedal from "./medalList/SilverMedal";

const App = () => {
  return (
    <main className="main-center">
      <GoldMedal />
      <SilverMedal />
      <BronzeMedal />
    </main>
  );
};

export default App;
