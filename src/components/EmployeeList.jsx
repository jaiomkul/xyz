import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


export const EmployeeList = () => {
  const [users, setUsers] = useState([]);

  useState(() =>{
    axios.get(`http://localhost:8080/employees`)
    .then(({data}) =>{
      console.log(data)
      setUsers(data);
    });
  }, [])


  return (
    <div className="list_container">
      <div className="employee_card">
        <img className="employee_image" src={users.image} />
        <span className="employee_name">{users.employee_name}</span>
        <span className="employee_title">{users.title}</span>
      </div>
      {/* On clicking this card anywhere, user goes to user details */}
    </div>
  );
};
