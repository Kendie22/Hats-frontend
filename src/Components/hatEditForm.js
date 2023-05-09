// import React from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function HatEditForm() {
//   let { id } = useParams();
//   const navigate = useNavigate();

//   const [hat, setHat] = useState({
//     style: "",   
//     color: "",
//     size: "",
//     is_available: "",
//     material: "",
//     price: "",
//   });

//   useEffect(() => {
//     axios.get(`http://localhost:3003/hats/${id}`).then((response) => {
//       setHat(response.data);
//     });
//   }, []);

//   const handleChange = (event) => {
//     setHat({ ...hat, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .put(`http://localhost:3003/hats/${id}`, hat)
//       .then((response) => {
//         navigate(`/hats/${id}`);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>    
//       <h1>Edit Hat</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Style</label>
//           <input
//             type="text"
//             name="style"
//             value={hat.style}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Color</label>
//           <input
//             type="text"
//             name="color"
//             value={hat.color}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Size</label>
//           <input
//             type="text"
//             name="size"
//             value={hat.size}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Is Available</label>
//           <input
//             type="text"
//             name="is_available"
//             value={hat.is_available}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Material</label>
//           <input
//             type="text"
//             name="material"
//             value={hat.material}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Price</label>
//           <input
//             type="text"
//             name="price"
//             value={hat.price}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>    
//     </div>
//   );
// }





