import ActionMovies from "./ActionMovies";
import NewMovies from "./NewMovies";
import SlideShow from "./SlideShow";
const Home = () => {
  return (
    <div className="dark:bg-black">
      <SlideShow />
      <NewMovies />
      <ActionMovies />
    </div>
  );
};

export default Home;
