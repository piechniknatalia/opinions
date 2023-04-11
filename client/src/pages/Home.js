import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Home() {
    const [listOfOpinions, setListOfOpinions] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4001/opinions").then((response) => {
            setListOfOpinions(response.data);
        });
    }, []);
    return (
        <div className="form">
            {listOfOpinions.map((value, key) => {
                return (
                    <div className="opinion" onClick={() => {navigate(`/opinion/${value.productName}`)}}>
                        <div className='productName'> {value.productName} </div>
                        <div className='username'> {value.username} </div>
                        <div className='body'> {value.opinionText} </div>
                    </div>
                );
            })}
        </div>
    )
}
export default Home;