import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);

  const naviagte = useNavigate();

  const [inpval, setINP] = useState({
    user: "",
    DOB: "",
    fullname: "",
    mother_name: "",
    products: "",
    hobbies: "",
    state: "",
    city: "",
    Postal_code: "",
  });

  const setdata = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const {
      user,DOB,fullname,mother_name,products,hobbies,state,city,Postal_code,
    } = inpval;

    const res = await fetch("https://cloudwalker.onrender.com/register", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,DOB,fullname,mother_name,products,hobbies,state,city,Postal_code,
      }),
    });

    const data =  res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      naviagte("/");
      setUdata(data);
    //   console.log("data added");
    }
  };

  return (
    <div className="container">
      <NavLink to="/">home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              user
            </label>
            <input
              type="text"
              value={inpval.user}
              onChange={setdata}
              name="user"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              DOB
            </label>
            <input
              type="text"
              value={inpval.DOB}
              onChange={setdata}
              name="DOB"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              fullname
            </label>
            <input
              type="text"
              value={inpval.fullname}
              onChange={setdata}
              name="fullname"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              mother_name
            </label>
            <input
              type="text"
              value={inpval.mother_name}
              onChange={setdata}
              name="mother_name"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              products
            </label>
            <input
              type="text"
              value={inpval.products}
              onChange={setdata}
              name="products"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              hobbies
            </label>
            <input
              type="text"
              value={inpval.hobbies}
              onChange={setdata}
              name="hobbies"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              state
            </label>
            <input
              type="text"
              value={inpval.state}
              onChange={setdata}
              name="state"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              city
            </label>
            <input
              name="city"
              value={inpval.city}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Postal_code
            </label>
            <input
              name="Postal_code"
              value={inpval.Postal_code}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>

          <button
            type="submit"
            onClick={addinpdata}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
