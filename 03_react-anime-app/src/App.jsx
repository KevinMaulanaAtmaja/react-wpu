import { useState } from "react";
import "./App.css";

const animesData = [
  {
    mal_id: 39196,
    title: "Mairimashita! Iruma-kun",
    year: 2019,
    image: "https://cdn.myanimelist.net/images/anime/1009/103187.jpg",
    score: 7.74,
    synopsis:
      "Fourteen-year-old Iruma Suzuki has been unfortunate all his life, having to work to earn money for his irresponsible parents despite being underage. One day, he finds out that his parents sold him to the demon Sullivan. However, Iruma's worries about what will become of him are soon relieved, for Sullivan merely wants a grandchild, pampering him and making him attend the demon school Babyls.",
  },
  {
    mal_id: 43299,
    title: "Wonder Egg Priority",
    year: 2021,
    image: "https://cdn.myanimelist.net/images/anime/1079/110751.jpg",
    score: 7.58,
    synopsis:
      "Following the suicide of her best and only friend, Koito Nagase, Ai Ooto is left grappling with her new reality. With nothing left to live for, she follows the instructions of a mysterious entity and gets roped into purchasing an egg, or specifically, a Wonder Egg.",
  },
  {
    mal_id: 32901,
    title: "Eromanga Sensei",
    year: 2017,
    image: "https://cdn.myanimelist.net/images/anime/2/86468.jpg",
    score: 6.34,
    synopsis:
      "One year ago, Sagiri Izumi became step-siblings with Masamune Izumi. But the sudden death of their parents tears their new family apart, resulting in Sagiri becoming a shut-in which cut her off from her brother and society.",
  },
  {
    mal_id: 9379,
    title: "Denpa Onna to Seishun Otoko",
    year: 2011,
    image: "https://cdn.myanimelist.net/images/anime/1799/114806.jpg",
    score: 7.12,
    synopsis:
      "Makoto Niwa meticulously tallies the amount of positive and negative youthful experiences he engages in as if to grade his own life. When his parents go overseas, he moves to a new town to live with his aunt, welcoming the change and ready for a fresh start. However, as ordinary as he had imagined his adolescence to be, he could never have taken the existence of an enigmatic long-lost cousin into account.",
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }
  return (
    <>
      <Navbar>
        <Logo />
        <Search>
          <NumResult animes={animes} />
        </Search>
      </Navbar>
      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}

function Navbar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🎥</span>
      <h1>AnimInfo</h1>
      <span role="img">🎬</span>
    </div>
  );
}

function Search({ children }) {
  const [query, setQuery] = useState("");
  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children}
    </div>
  );
}

function NumResult({ animes }) {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen &&  children }
    </div>
  );
}

function AnimeList({ animes, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Anime
          key={anime.mal_id}
          anime={anime}
          onSelectedAnime={onSelectedAnime}
        />
      ))}
    </ul>
  );
}

function Anime({ anime, onSelectedAnime }) {
  return (
    <li onClick={() => onSelectedAnime(anime.mal_id)}>
      <img src={anime.image} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year}</span>
        </p>
      </div>
    </li>
  );
}

function AnimeDetail({ selectedAnime }) {
  return (
    <div className="details">
      <header>
        <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>
          <p>
            {selectedAnime.year} &bull; {selectedAnime.score}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em>
        </p>
      </section>
    </div>
  );
}
