import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import DollCloth from "../DollCloth/DollCloth";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <h2>this is home</h2>
            <DollCloth></DollCloth>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;