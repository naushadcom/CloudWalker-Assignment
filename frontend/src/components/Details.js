import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';


const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const naviagte = useNavigate();


    const getdata = async () => {

        const res = await fetch(`https://cloudwalker.onrender.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://cloudwalker.onrender.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            naviagte("/");
        }

    }

    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Harsh Pathak</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">User: <span >{getuserdata.user}</span></h3>
                            <h3 className="mt-3">DOB: <span >{getuserdata.DOB}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Fullname: <span>{getuserdata.fullname}</span></p>
                            <p className="mt-3"><WorkIcon />Mother Name: <span>{getuserdata.mother_name}</span></p>
                            <p className="mt-3"><WorkIcon />products: <span>{getuserdata.products}</span></p>
                            <p className="mt-3"><WorkIcon />hobbies: <span>{getuserdata.hobbies}</span></p>
                            <p className="mt-3"><WorkIcon />state: <span>{getuserdata.state}</span></p>
                            <p className="mt-3"><WorkIcon />city: <span>{getuserdata.city}</span></p>
                            <p className="mt-3"><WorkIcon />Postal_code: <span>{getuserdata.Postal_code}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details
