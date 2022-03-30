import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.click}
      value={props.value}
    >
      {/* {props.name} */}
      {props.children}
    </button>
  );
};
export default Button;

// import Button from "../UI/Button";
// <Button type="submit">Add Task</Button>;
