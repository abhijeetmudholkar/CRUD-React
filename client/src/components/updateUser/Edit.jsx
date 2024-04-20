import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {


  const users ={
    fname: "",
    lname: "",
    email: ""
  }
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getone/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, user)
      .then((res) => {
        toast.success(res.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddUser">
      <Link to={"/"}>Back</Link>
      <h3>Update User Details</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            value={user.fname}
            id="fname"
            autoComplete="off"
            placeholder="First Name"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            value={user.lname}
            id="lname"
            autoComplete="off"
            placeholder="Last Name"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={user.email}
            id="email"
            autoComplete="off"
            placeholder="Email"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
