import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import SearchBar from "./components/Search/SearchBar";
import PlayerInformation from "./components/Player/PlayerInformation";
import React, { useState, useEffect } from "react";
import Modal from "./components/Modal/Modal";
import * as Scroll from "react-scroll";

const SearchContext = React.createContext();

var axios = require("axios").default;

function App() {
  const [search, setSearch] = useState("");
  const [season, setSeason] = useState(2020);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0);
  const [statsData, setStatsData] = useState([]);

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    if (search !== "") {
      var options = {
        method: "GET",
        url: `https://www.balldontlie.io/api/v1/players?search=${search}`,
        headers: {
          "x-rapidapi-key":
            "b0affd712amshf4fd168f680a6c3p1f73dajsn6ca91e67ef16",
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data);
          setSearch(
            response.data.data[0].first_name +
              " " +
              response.data.data[0].last_name
          );
          setId(response.data.data[0].id);
          async function scrl() {
            // eslint-disable-next-line no-unused-vars
            const scl = await scroll.scrollTo(950, {
              delay: 0,
              duration: 1000,
              smooth: "easeInOutQuint",
            });
          }
          scrl();
        })
        .catch(function (error) {
          console.error(error);
          setSearch("");
          setModal(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (search !== "") {
      var options = {
        method: "GET",
        url: `https://www.balldontlie.io/api/v1/season_averages?season=${season}&&player_ids[]=${id}`,
        headers: {
          "x-rapidapi-key":
            "b0affd712amshf4fd168f680a6c3p1f73dajsn6ca91e67ef16",
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(async function (response) {
          const abc = await response.data;
          setStatsData(abc);
          console.log(abc);
        })
        .catch(function (error) {
          console.error(error);
          setSearch("");
          setModal(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, season]);

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          search,
          setSearch,
          modal,
          setModal,
          season,
          setSeason,
          data,
          statsData,
        }}
      >
        <HeroSection />
        <SearchBar />
        <PlayerInformation />
        <Modal />
      </SearchContext.Provider>
      <footer>© Copyright, All Rights Reserved</footer>
    </div>
  );
}

export default App;

export { SearchContext };
