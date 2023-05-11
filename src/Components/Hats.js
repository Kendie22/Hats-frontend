import axios from "axios";
import { useState, useEffect } from "react";

import "../Hat.css"
import Hat from "./hat";


const API = process.env.REACT_APP_API_URL;

export default function Hats() {
    const [hats, setHats] = useState([]);
    useEffect(() => {
        axios.get(`${API}/hats`).then((response) => {
            setHats(response.data)
        }).catch((e) => {
            console.warn("catch", e);
        });
    }, []);
    return (
        <div className="Hats">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="message">Discover our Stunning Hat Collection!</th>
                        </tr>
                    </thead>
                    <tbody className="map-image">
                        {hats.map((hat) => {
                            return <Hat key={hat.id} hat={hat} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

