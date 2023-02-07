import { useState } from 'react';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";

export default function Update(){

    const location =useLocation();
    const [name, setName] = useState(location.state.name);
    const [age, setAge] = useState(location.state.age);
    const button=location.state.button;
    const id=location.state.id;
    
    const url ="http://localhost:9090/students";

    function handleUpdate(event) {
        
          if(button==="Insert"){
            if(name==="" || age===""){
              toast.warn("Please give input");
            }
            else{
              let item={ name, age };
              
            fetch(url , {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(item)
            })
              .then((res) => res.json())
              .then((result) => {
                toast.success("Inserted Sucessfully");
                setTimeout(() => {
                  window.history.back();
                }, 1000);
              })
              .catch(error =>{
                toast.error("Failed to Insert");
              })
              ;
            }
          }
          else{
            let item = { name, age };
    
        fetch(url + "/" + id, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        })
          .then((res) => res.json())
          .then((result) => {
            toast.success("Updated Successfully");
            setTimeout(() => {
                window.history.back();
              }, 1000);
          })
          .catch((error)=>
            {toast.error("Failed to Update");}
          )
          ;
          }
      }
      function handleNewRecord(){
        setName("");
        setAge("");  
        
      }
    return(    
        <div>
        
        <ToastContainer />
        <center>
        <h1>{button} Details</h1>
          <table className="child">
              {button==="Update" &&<tr>
                <td>Id</td>
                <td>
                  <input
                    type="text"
                    value={id}
                    
                  />
                </td>
              </tr> }
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <center>
                  <button 
                    style={{ backgroundColor: "#4CAF50",
                    border: "none",
                    color: "white",
                    padding: "4px 12px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "50px"}} 
                  onClick={handleUpdate} >{button}</button>
                  <button
                    style={{ backgroundColor: "#afb3b1",
                    border: "none",
                    color: "white",
                    padding: "4px 12px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "50px"}} 
                    onClick={handleNewRecord}
                  >
                    Reset
                  </button>
                </center>
              </td>
            </tr>
          </table>
        </center>
      </div>
    );
}