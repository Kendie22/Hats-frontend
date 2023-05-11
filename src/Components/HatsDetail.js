
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Hat from "./hat";

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
        deleteHat()
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
        <div>
            <h3>{hat.id ? <span>🧢</span> : null} {hat.style}</h3>
            {<h6> Style: {hat.style}, Color: {hat.color}, Size: {hat.size}, Price: ${hat.price}, Material: {hat.material},{" "} {hat.is_available ? "Available" : "Not available"} </h6>}

            {hat.price > 150 ? (<h4> This is a Collector's Item 👜</h4>) : (<h4> This is not a Collector's Item 👑</h4>)}
            <div>
                <Link to={`/hats`}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/hats/${hat.id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
            <div>
                <button onClick={() => handleDelete(hat.id)}>Delete</button>
            </div>
        </div>
    )
};


