import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Tours from "./components/tours/Tours";
import Loading from "./components/loading/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log("id", id);
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };

  const refreshTourData = () => {
    getTours();
  };

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setTours([]);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Loading />
        </Grid>
      </Grid>
    );
  }

  if (tours.length === 0) {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <h1>No Tours Left</h1>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => refreshTourData()}
            >
              Refresh
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Tours toursData={tours} removeTour={removeTour} />
      </Grid>
    </Grid>
  );
};

export default App;
