
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
//import Hat from "./hat";

const API = process.env.REACT_APP_API_URL

export default function HatsDetails() {
    const [hat, setHat] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)

    useEffect(() => {
        axios.get(`${API}/hats/${id}`).then((response) => {
            setHat(response.data)
        }).catch((e) => {
            console.warn("catch", e);
        });
    }, [id])

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")) {
            deleteHat()
        }


    }
    const deleteHat = () => {
        axios.delete(`${API}/hats/${id}`).then(() => {
            navigate(`/hats`)

        })
            .catch((e) => console.error(e)
            )
            .catch((e) => console.warn("catch", e));

    }

    return (
        <div className="big-hat">
            <img src={hat.image} alt="hat pic" />

            {<h5> Style: {hat.style}, Color: {hat.color}, Size: {hat.size}, Price: ${hat.price}, Material: {hat.material},{" "} {hat.is_available ? "Available" : "Not available"} </h5>}

            {hat.price > 150 ? (<h4> This is a Collector's Item 👜</h4>) : (<h4> This is not a Collector's Item 👑</h4>)}
            <div className="functionality">
                <Link to={`/hats`}>
                    <button className="edit-button">Back</button>
                </Link>

                <Link to={`/hats/${hat.id}/edit`}>
                    <button className="edit-button">Edit</button>
                </Link>

                <button onClick={() => handleDelete(hat.id)} className="edit-button">Delete</button>
            </div>
        </div>
    )
};


