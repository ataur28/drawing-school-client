import { Link } from "react-router-dom";


const AllDollCategory = ({ subDolls }) => {
    const { _id,classPicture, className, instructorName, availableSeats, price } = subDolls;
    return (


        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                <div className="flex items-center space-x-3">
                    
                    <div>
                        {/* <div className="font-bold">{classPicture}</div> */}
                        <img className="rounded-lg w-14 h-14" src={classPicture} alt="" />
                    </div>
                </div>
            </td>
            <td>
                {className}
            </td>
            <td>
                {instructorName}
                
            </td>
            <td>
                {availableSeats}
            </td>
            <td>
                ${price}
            </td>
            <th>
            {/* <Link to={`/subDolls/${_id}`}><button className='btn btn-primary'>View Details</button></Link> */}
            <button className='btn btn-primary'>Select Button</button>
            </th>
        </tr>


    );
};

export default AllDollCategory;