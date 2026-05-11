import Footer from "../components/Footer";
import GameStore from "../components/GameStore";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <GameStore />
      <Footer />
    </div>
  );
};

export default Home;