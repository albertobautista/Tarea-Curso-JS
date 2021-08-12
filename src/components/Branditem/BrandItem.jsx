import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

const BrandItem = ({ name, imageUrl, history, match }) => {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Card>
        <CardActionArea
          onClick={() => history.push(`${match.url}details/${name}`)}
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="320"
            image={imageUrl}
            title="Contemplative Reptile"
            on
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withRouter(BrandItem);
