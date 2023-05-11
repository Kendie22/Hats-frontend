import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

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
            {hat.map((hat) => (
                <article key={hat.id}>
                    <h3>{hat.id ? <span>🧢</span> : null} {hat.style}</h3>
                    <h6>{hat.id} {hat.style}, {hat.color}, {hat.size}, {hat.material}</h6>
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

        // <div>


        // <article>
        //     <h3>{hat.id ? <span>🧢</span> : null} {hat.style}</h3>

        //     <h6>{hat.id} {hat.style}, {hat.color}, {hat.size}, {hat.material}</h6>
        //     <div>
        //         <Link to={`/hats`}>
        //             <button>Back</button>
        //         </Link>
        //     </div>
        //     <div>
        //         <Link to={`/hats/id/edit`}>
        //             <button>Edit</button>
        //         </Link>
        //     </div>
        //     <div>
        //         <button onClick={handleDelete}> Delete</button>
        //     </div>


        // </article>
        // </div>

    )
};


