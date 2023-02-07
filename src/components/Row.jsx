import React from "react";
import { Link } from "react-router-dom";



export default function Row(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>
        <Link to="/update" state={{id:props.id,name:props.name,age:props.age,button:"Update"}}>
        <button style={{ backgroundColor: "#cfba21",
          border: "none",
          color: "white",
          padding: "4px 12px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "50px"}} 
          >
          Edit</button>
        </Link>
      </td>
      <td>
        <button style={{ backgroundColor: "#d40b0e",
          border: "none",
          color: "white",
          padding: "5px 12px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "50px"}} 
          onClick={handleDelete}>
          Delete</button>
          
      </td>
    </tr>
  );
}
