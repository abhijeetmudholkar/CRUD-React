import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add.css"; // Corrected filename and import statement
import axios from "axios"
import { toast } from "react-hot-toast";

const Add = () => {
  const initialUserState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUserState);
  const navigate= useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/create",user).then((res)=>{
        toast.success(res.data.msg,{postion:"top-right"})
        navigate("/")
    }).catch(error=>console.log(error))
    
  };

  return (
    <div className="AddUser">
      <Link to={"/"}>Back</Link>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit} className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First Name"
            value={user.fname}
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last Name"
            value={user.lname}
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            value={user.email}
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={user.password}
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
