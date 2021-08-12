import React from "react";
import BrandItem from "../Branditem/BrandItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Brands = ({ brands }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {brands.map(({ id, ...otherBrandProps }) => (
          <BrandItem key={id} {...otherBrandProps} />
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
