import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import Beer from "./types/Beer";
import Card from "./Card";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [beerCards, setBeerCards] = useState<Beer[]>([]);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return; //prevent empty search
    setLoading(true);
    const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchQuery}`);
    const data: Beer[] = await res.json();
    setBeerCards(data);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`);
        const data: Beer[] = await res.json();
        setBeerCards(data);
      } catch (error) {
        console.log("Error fetching", error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <div className="container">
      <nav className="flex">
        <h1>Welcome to Punk Beer Gallery</h1>
        <form className="searchBox" onSubmit={handleSearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="searchButton" type="submit">
            <img width={28} src="./icons8-search-80.png" alt="search" />
          </button>
        </form>
      </nav>
      <div id="cardGrid">
        {loading ? (
          // loading
          <div className="lds-circle">
            <div></div>
          </div>
        ) : (
          //Cards
          <>
            {beerCards.map((beer) => (
              <Card {...beer} key={beer.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
