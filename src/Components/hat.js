import { Link } from "react-router-dom";


function Hat({ hat }) {
    return (
        <tr>
            <td>{hat.style}</td>
            <td>{hat.color}</td>
            <td>{hat.size}</td>
            <td>{hat.is_available}</td>
            <td>{hat.material}</td>
            <td>{hat.price}</td>

            <td>
                <Link to={`/hats/${hat.id}`}>✏️</Link>
            </td>

        </tr>
    )
}
export default Hat;