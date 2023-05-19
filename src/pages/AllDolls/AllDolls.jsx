import { useEffect, useState } from "react";
import AllDollCategory from "../AllDollCategory/AllDollCategory";


const AllDolls = () => {
    const [dolls, setDolls] = useState([]);

    useEffect(() => {
        fetch('dolls.json')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])

    return (
        <div>
            <h2>here all dolls number {dolls.length}</h2>

            <div>
                {
                    dolls?.map(subDolls => <AllDollCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                    ></AllDollCategory>)
                }
            </div>
        </div>
    );
};

export default AllDolls;