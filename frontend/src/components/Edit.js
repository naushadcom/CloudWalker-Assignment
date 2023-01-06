import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";

const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const naviagte = useNavigate("");

  const [inpval, setINP] = useState({
    user:"",
    DOB:"", 
    fullname:"" ,
    mother_name:"",
    products:"",
    hobbies:"",
    state:"",
    city:"",
    Postal_code:"",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`https://cloudwalker.onrender.com/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const {
      user,
      DOB,
      fullname,
      mother_name,
      products,
      hobbies,
      state,
      city,
      Postal_code,
    } = inpval;

    const res2 = await fetch(
      `https://cloudwalker.onrender.com/updateuser/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          DOB,
          fullname,
          mother_name,
          products,
          hobbies,
          state,
          city,
          Postal_code,
        }),
      }
    );

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      naviagte("/");
      setUPdata(data2);
    }
  };

  return (
    <div className="container">
      <NavLink to="/">home2</NavLink>
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

          <button type="submit" onClick={updateuser} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
