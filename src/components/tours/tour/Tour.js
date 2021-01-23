import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const Tour = ({ tour, removeTour }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    console.log("clicked");
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tour.image}
          title={tour.name}
        />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              style={{ flex: 1 }}
            >
              {tour.name}
            </Typography>
            <Button variant="text" color="primary">
              ${tour.price}
            </Button>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {expanded ? tour.info : `${tour.info.substring(0, 200)}...`}
            <Button
              color="primary"
              variant="text"
              aria-label="show more"
              onClick={handleExpandClick}
            >
              {expanded ? "Show less" : "read more"}
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => removeTour(tour.id)}
        >
          Not Interested
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tour;
