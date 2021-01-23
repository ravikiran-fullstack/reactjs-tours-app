import React from "react";

import Tour from "./tour/Tour";

import useStyles from "./styles";

const Tours = (props) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className={classes.heading}>Our Tours</h1>
        <p className={classes.underline}></p>
      </div>
      {props.toursData.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={props.removeTour} />;
      })}
    </>
  );
};

export default Tours;
