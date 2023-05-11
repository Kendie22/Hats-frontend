
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Hat from "./hat";

const API = process.env.REACT_APP_API_URL

export default function HatsDetails() {
    const [hat, setHat] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/hats`).then((response) => {
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
            {/* <Hat />
            {hat.id} */}
            <div>
            </div>
            {hat.map((hat) => (
                <article key={hat.id}>
                    <h3>{hat.id ? <span>🧢</span> : null} {hat.style}</h3>
                    <h6>color: {hat.color}, size: {hat.size}, price: ${hat.price}, material: {hat.material},{" "} {hat.is_available ? "Available" : "Not available"} </h6>
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
                </article>
            ))}
        </div>

    )
};


