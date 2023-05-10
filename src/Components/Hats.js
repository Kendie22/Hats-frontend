import axios from "axios";
import { useState, useEffect } from "react";
import Hat from "./Hat";

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
                            <th>Take me there</th>
                            <th>See this Hat</th>
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
