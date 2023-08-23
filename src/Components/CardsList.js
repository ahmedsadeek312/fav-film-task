import react, { useState } from "react";
import Movie from "./Movie";
import "./CardsList.css";
const CardsList = () => {
  const [movies, setMovies] = useState([
    {
      title: "The hobbit",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfVAuPN9qOG_52Kecu0nTDkKmMm5KZYUjPg&usqp=CAU",
      description: "Nice Movie",
    },
    {
      title: "The lord of the rings",
      img: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
      description: "Nice movie",
    },
    {
      title: "Ghosted",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcLiWCuhGEVdZzKq1H3kJHETYjjqW8Bpmcg&usqp=CAU",
      description: "Nice movie",
    },
    {
      title: "Shawshank redemption",
      img: "https://i.ebayimg.com/images/g/ag4AAOSw4CFY3NZF/s-l500.jpg",
      description: "Nice movie",
    },
  ]);
  const [opMovies, setOpMovies] = useState(movies);
  const handleChange = (val) => {
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(val.toLowerCase());
    });
    setOpMovies(filteredMovies);
  };
  return (
    <div>
      <div className="input-container">
        <input onChange={(e) => handleChange(e.target.value)} type="text" />
        <input type="number" />
      </div>
      <div className="movies-container">
        {opMovies.map((movie) => (
          <Movie
            title={movie.title}
            img={movie.img}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
