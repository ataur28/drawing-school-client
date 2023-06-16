import { useEffect, useState } from "react";
import AllDollCategory from "../AllDollCategory/AllDollCategory";
import useTitle from "../../hook/useTitle";
// https://dolls-drawing-school-server.vercel.app/

const AllDolls = () => {
    useTitle('All Classes');
    const [dolls, setDolls] = useState([]);

    useEffect(() => {
        fetch('https://dolls-drawing-school-server.vercel.app/dolls')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])

    return (
        <div className="mb-10 mt-10">

            <form>
                <div className="flex justify-center items-center">
                    <input type="text" name="search" placeholder="search" className="input input-bordered" />
                    <button className="btn btn-secondary">Search</button>
                </div>
            </form>

            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            dolls?.map(subDolls => <AllDollCategory
                                key={subDolls._id}
                                subDolls={subDolls}
                            ></AllDollCategory>)
                        }



                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default AllDolls;