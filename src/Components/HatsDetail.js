// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL

// export default function HatsDetails() {
//     const [hat, setHat] = useState([]);
//     const { id } = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get(`${API}/hats/`).then((response) => {
//             setHat(response.data[0])
//         }).catch((e) => {
//             console.warn("catch", e);
//         });
//     }, [id])

//     const handleDelete = () => {
//         deleteHat()
//     }
//     const deleteHat = () => {
//         axios.delete(`${API}/hats/${id}`).then(() => {
//             navigate(`/hats`)

//         })
//             .catch((e) => console.error(e)
//             )
//             .catch((e) => console.warn("catch", e));
//     }
//     return (
//         <article>
//             <h3>{hat.style ? <span>🧢</span> : null} {hat.color}</h3>

//             <h6>{hat.style}</h6>
//             <div>
//                 <Link to={`/hats`}>
//                     <button>Back</button>
//                 </Link>
//             </div>
//             <div>
//                 <Link to={`/hats/id/edit`}>
//                     <button>Edit</button>
//                 </Link>
//             </div>


//         </article>

//     )
// };


