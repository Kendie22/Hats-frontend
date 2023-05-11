import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function HatNewForm() {
    let navigate = useNavigate();

    const addHat = (newHat) => {
        axios
            .post(`${API}/hats`, newHat)
            .then(
                () => {
                    navigate(`/hats`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const [hat, setNewHat] = useState({
        style: "",
        color: "",
        size: "",
        is_available: "",
        material: "",
        price: "",
        image: "",
    });

    const handleTextChange = (event) => {
        setNewHat({ ...hat, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addHat(hat);
    };
    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="style">Style:</label>
                <input
                    id="style"
                    value={hat.style}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Hat Style"
                    required
                />
                <label htmlFor="color">Color:</label>
                <input
                    id="color"
                    type="text"
                    required
                    value={hat.color}
                    placeholder="Hat Color"
                    onChange={handleTextChange}
                />
                <label htmlFor="size">Size:</label>
                <input
                    id="size"
                    type="text"
                    name="size"
                    value={hat.size}
                    placeholder="Hat Size"
                    onChange={handleTextChange}
                />
                <label htmlFor="material">Material:</label>
                <input
                    id="material"
                    type="text"
                    name="material"
                    value={hat.material}
                    onChange={handleTextChange}

                />
                <label htmlFor="is_available">Is Avaiable:</label>
                <input
                    id="is_available"
                    type="text"
                    name="is_available"
                    value={hat.is_available}
                    onChange={handleTextChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    type="text"
                    name="price"
                    value={hat.price}
                    onChange={handleTextChange}
                /> 
                 <label htmlFor="image">Price:</label>
                <input
                    id="image"
                    type="text"
                    name="image"
                    value={hat.image}
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default HatNewForm;