import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function HatEditForm() {
    let {id} = useParams();

    const [hat, setHat] = useState({    
        style: "",
        color: "",
        size: "",
        is_available: "",
        material: "",
        price: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:3003/hats/${id}`).then((response) => {
            setHat(response.data);
        });  
    }, []);

    const handleTextChange = (event) => {    
        setHat({...hat, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3003/hats/${id}`, hat).then((response) => {
            navigate(`/hats/${id}`);
        }).catch((err) => {
            console.log(err);
        });
    };

<div className="Edit">


<form onSubmit={handleSubmit}>
  <label htmlFor="style">Style:</label>
  <input
    id="style"
    value={hat.style}
    type="text"
    name="style"
    onChange={handleTextChange}
    placeholder="Hat Style"
    required
  />
  <label htmlFor="color">Color:</label>
  <input
    id="color"
    type="text"
    name="color"
    required
    value={hat.color}
    onChange={handleTextChange}
  />
  <label htmlFor="size">Size:</label>
  <input
    id="size"
    type="text"
    name="size"
    values={hat.size}
    onChange={handleTextChange}
  />
 
 <label htmlFor="material">Material:</label>
  <input
    id="material"
    type="text"
    name="material"
    values={hat.material}
    onChange={handleTextChange}
  />

<label htmlFor="is_available">Is Available:</label>
  <input
    id="is_available"
    type="text"
    name="is_available"
    values={hat.available}
    onChange={handleTextChange}
  />

<label htmlFor="price">Price:</label>
  <input
    id="price"
    type="text"
    name="price"
    values={hat.price}
    onChange={handleTextChange}
  />
  <br />

  <input type="submit" />
</form>
</div>
;
}




