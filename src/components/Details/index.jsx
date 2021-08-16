import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DETAILS_DATA from "./details_data";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    width: "100%",
  },
}));

const Details = ({ history }) => {
  const classes = useStyles();
  const { brand } = useParams();
  const [details, setDetails] = useState(DETAILS_DATA);
  const [detailItems, setDetailItems] = useState([]);

  const getBrandItems = (brand) => {
    const detailsItems = details.filter((detail) => detail.name === brand);
    setDetailItems(detailsItems[0].items);
  };

  useEffect(() => {
    getBrandItems(brand);
  }, [brand]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item>
          <ImageList rowHeight={360} className={classes.imageList} cols={3}>
            {detailItems.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1}>
                <img src={item.img} alt={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => history.push("/")}
            variant="contained"
            color="primary"
          >
            Regresar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
