import "./index.css";
import { React, useEffect, useState } from "react";
import Row from "./components/Row";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Link } from "react-router-dom";


export default function App(props) {
  
  const [details, setDetails] = useState([]);
  const [offset,setOffset]=useState(0);
  const limit=10;
  const url ="http://localhost:9090/students";

  
  
  function fetchUsers(){
    const x=url+"?offset="+offset+"&limit="+limit
    fetch(x)
      .then((res) => res.json())
      .then((result) => {
        toast.success("Fetched Successfully");  
        setDetails([...details,...result]);
      }).catch(error=>{
        toast.error("Unable to Fetch");
      });
  }
  useEffect(() => {
    fetchUsers();
  },[offset]);
  function deleteId(id) {
      let x=window.confirm("Are you sure you want to delete this record id "+ id)
      if(x){
        fetch(url + "/" + id, { method: "DELETE" })
      .then()
      .then(() => {
        setDetails(
          details.filter((prev) => {
            return id !== prev.id;
          })
        )
        toast.success("Deleted Successfully")
        ;
      });
      }
  }
  

  

  const handleScroll = (event) => {
    const bottom =event.target.scrollHeight - (event.target.scrollTop +0.5 )=== event.target.clientHeight;
    if (bottom) {
      setOffset(prev =>10+prev);
    }
  };
  return (
    <div className="App">
      <h1>Basic React App</h1>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <center> 
      <div style={{ height: "525px", overflow: "auto" }} onScroll={handleScroll}>
      <table className="main">
          <thead >
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          {(details.length===0)?<tr><td colSpan={5}><center>No Records</center></td></tr>:details.map((detail, index) => {
            return (
              <Row
                key={index}
                id={detail.id}
                name={detail.name}
                age={detail.age}
                onDelete={deleteId}
                
              />
            );
          })}
        </table>
        </div>
      </center>
      <div>
        <h1></h1>
        <center>
          <Link to="/update" state={{ id:0,name:"",age:"",button:"Insert"}} ><button
            style={{ backgroundColor: "green",
            border: "none",
            color: "white",
            padding: "4px 12px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "50px"}} 
          >Insert</button> </Link>
        </center>
      </div>
    </div>
  );
}
