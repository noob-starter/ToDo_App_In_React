import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import DisplayImage from '../Images/display.gif'
import DisplayImageX from '../Images/imagex.gif'
import swal from 'sweetalert';

import '../css/main.css'
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {

      swal({
        title: "Wait !!!",
        text: "You cannot have Empty Task",
        icon: "warning",
        button: "Click Here",
        timer:3000,
      });

    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <img className="image" src={DisplayImage} alt="displayImage" />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
       {todo?<h6>Add</h6>:<GoPlus />}
      </motion.button>
      <img className="imageX" src={DisplayImageX} alt="displayImageX" />
      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
