import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

export default function AllMathProfessions() {
  const classes = useStyles();

  const [mathPros, setMathPros] = useState([{}]);

  useEffect(() => {
    axios
      .get("https://pro-pens.herokuapp.com/api/occupations/math")
      .then(res => {
        console.log(res.data);
        setMathPros(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={classes.root}>
      <FixedSizeList height={400} width={360} itemSize={20} itemCount={200}>
        <div>
          {mathPros.map(pros => (
            <div key={pros.id}>{pros.name}</div>
          ))}
        </div>
      </FixedSizeList>
    </div>
  );
}
