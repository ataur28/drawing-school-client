

const AddDoll = () => {
    return (

        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Add A Doll</h2>
            <form >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Doll Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="doll name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder="seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="sellerEmail" placeholder="seller email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        {/* <input type="text" name="category" placeholder="sub-category" className="input input-bordered" /> */}

                        <select className="input input-bordered" name="category" id="cars">
                            <option value="baby">Baby</option>
                            <option value="barbie">Barbie</option>
                            <option value="american">American</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="details" placeholder="detail " className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture UR</span>
                    </label>
                    <input type="text" name="picture" placeholder="picture URL of the toy" className="input input-bordered" />
                </div>
            </form>

            <div className="form-control mt-6">
                <button className="btn btn-primary mb-6" type="submit">Add A Doll</button>
            </div>
        </div>

    );
};

export default AddDoll;