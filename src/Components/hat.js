import { Link } from "react-router-dom";


function Hat({ hat }) {
    console.log(hat.image)
    return (
        <tr>
            <td>
                <Link to={`/hats/${hat.id}`}>
                    <article className="hat-image">
                        <img src={hat.image} alt="hat-pic" />
                        <h3>{hat.style}</h3>
                    </article>
                </Link>
            </td>

        </tr>
    )
}
export default Hat;