import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DollDetails = () => {
    const { subDollsId } = useParams();
    // console.log(subDollsId);
    const [details, setDetails] = useState(useLoaderData());
    // console.log(details);

    const doll = details.find((doll) => doll._id == subDollsId)
    // console.log(doll);
    
    const {picture, toyName, sellerName, sellerEmail, price, rating, quantity, details} = doll;

    return (
        <div>
            <h2>doll details {toyName} </h2>
        </div>
    );
};

export default DollDetails;