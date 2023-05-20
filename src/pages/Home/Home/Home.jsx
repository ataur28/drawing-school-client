import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import DollCategory from "../DollCategory/DollCategory";
import DollCloth from "../DollCloth/DollCloth";
import Gallery from "../Gallery/Gallery";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <DollCategory></DollCategory>
            <DollCloth></DollCloth>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;