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
                            <th></th>
                            <th className="message">Look at these AMAZING Hats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hats.map((hat) => {
                            return <Hat key={hat.id} hat={hat} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

