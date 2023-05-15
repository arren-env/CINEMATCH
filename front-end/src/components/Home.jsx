import ActionMovies from "./ActionMovies";
import NewMovies from "./NewMovies";
import RomComMovies from "./RomComMovies";
import SlideShow from "./SlideShow";
const Home = () => {
  return (
    <div className="dark:bg-black">
      <SlideShow />
      <NewMovies />
      <ActionMovies />
      <RomComMovies/>
    </div>
  );
};

export default Home;
