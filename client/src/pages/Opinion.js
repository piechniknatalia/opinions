import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

function Opinion() {
    let { productName } = useParams();
    const [opinionObjects, setOpinionObjects] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4001/opinions/byproductName/${productName}`).then((response) => {
            setOpinionObjects(response.data);
        });
    }, []);
    return (
        <div className="form">
            {opinionObjects.map((value, key) => {
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

export default Opinion;