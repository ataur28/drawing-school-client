import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllMyDolls from "../AllMyDolls/AllMyDolls";


const MyDolls = () => {
    const { user } = useContext(AuthContext);
    const emails = user?.email
    // console.log(emails)

    const [dolls, setDolls] = useState([]);

    // const {sellerEmail} = dolls;

    useEffect(() => {
        fetch('http://localhost:5000/dolls')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])

    // console.log(dolls)

    const result = dolls.filter((doll) => doll.sellerEmail == emails);
    // console.log(result)

    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">My Dolls</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Doll Picture and Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Detail Description</th>
                            <th>Delete Button</th>
                            <th>Update Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map(myDolls => <AllMyDolls
                                key={myDolls._id}
                                myDolls={myDolls}
                            ></AllMyDolls>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyDolls;