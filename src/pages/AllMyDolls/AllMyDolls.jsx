

const AllMyDolls = ({ myDolls, handleDelete }) => {
    const { _id, picture, toyName,category, price, quantity, details } = myDolls;

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}
                        </div>

                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>
                ${price}
            </td>
            <td>{quantity}</td>
            <td>{details}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">DELETE</button>
            </th>
            <th>
                <button className="btn btn-secondary btn-xs">UPDATE</button>
            </th>
        </tr>

    );
};

export default AllMyDolls;