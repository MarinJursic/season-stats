import React, { useEffect } from "react";
import "./PlayerInformation.scss";
import { Grid, Card, Typography } from "@material-ui/core";
import { useState, useContext } from "react";
import { SearchContext } from "../../App";

function PlayerInformation() {
  const { setSeason, data, search, statsData } = useContext(SearchContext);

  const [info, setInfo] = useState();

  const [szn, setSzn] = useState();

  const [stats, setStats] = useState();

  useEffect(() => {
    if (data.data) {
      setInfo(data.data[0]);
    }
    if (statsData.data) {
      setStats(statsData.data[0]);
    }
  }, [data, statsData]);

  const handleChange = (e) => {
    if (e.target.value < 1979 || e.target.value > 2020) {
      e.target.value = 2020;
    } else {
      setSzn(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (!szn) {
      const sznElem = document.getElementById("szn");
      sznElem.value = 2020;
      setSeason(2020);
    } else {
      setSeason(szn);
    }
  };

  useEffect(() => {
    if (!szn && search !== "") {
      const sznElem = document.getElementById("szn");
      sznElem.value = 2020;
      setSeason(2020);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="info">
      <div className="selectDiv">
        <input
          type="number"
          min="1979"
          max="2020"
          placeholder="Season..."
          onChange={handleChange}
          id="szn"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {info !== undefined ? (
        <h1 className="statsFor">
          Stats for {info.first_name} {info.last_name} in {szn ? szn : "2020"}
        </h1>
      ) : null}
      <Grid container spacing={2} className="grid">
        <Grid item xs={6} md={3}>
          <Card className="card">
            <Typography className="headerMd">Height</Typography>
            <Typography className="text">
              {info !== undefined
                ? info.height_feet !== null && info.height_inches !== null
                  ? info.height_feet + "' " + info.height_inches + "''"
                  : "Unkown"
                : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className="card">
            <Typography className="headerMd">Weight</Typography>
            <Typography className="text">
              {info !== undefined
                ? info.weight_pounds !== null
                  ? info.weight_pounds + " lbs"
                  : "Unknown"
                : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className="card">
            <Typography className="headerMd">Position</Typography>
            <Typography className="text">
              {info !== undefined
                ? info.position !== ""
                  ? info.position
                  : "Unknown"
                : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className="card">
            <Typography className="headerMd">Team</Typography>
            <Typography className="text">
              {info !== undefined ? info.team.name : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="card">
            <Typography className="header">Games Played</Typography>
            <Typography className="text">
              {stats !== undefined ? stats.games_played : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="card">
            <Typography className="header">Minutes Per Game</Typography>
            <Typography className="text">
              {stats !== undefined ? stats.min : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Points</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.pts : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Rebounds</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.reb : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Assists</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.ast : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Steals</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.stl : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Blocks</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.blk : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">Turnovers</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.turnover : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">Fouls</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.pf : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Field Goal %</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.fg_pct : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Three Point %</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.fg3_pct : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Card className="card">
            <Typography className="headerSm">Free Throw %</Typography>
            <Typography className="textSm">
              {stats !== undefined ? stats.ft_pct : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">FG Makes</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.fgm : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">3PT Makes</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.fg3m : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">FT Makes</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.ftm : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">FG Att.</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.fga : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">3PT Att.</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.fg3a : ""}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={1}>
          <Card className="card">
            <Typography className="headerXSm">FT Att.</Typography>
            <Typography className="textXSm">
              {stats !== undefined ? stats.fta : ""}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlayerInformation;
