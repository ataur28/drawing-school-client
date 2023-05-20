import dollCloth1 from '../../../assets/images/dollCloth/dollCloth1.png'
import dollCloth2 from '../../../assets/images/dollCloth/dollCloth2.png'
import dollCloth3 from '../../../assets/images/dollCloth/dollCloth3.png'
import dollCloth4 from '../../../assets/images/dollCloth/dollCloth4.png'

const DollCloth = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600 mb-6">Cloth and accessories for your dolls</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <img className='hover:scale-125 transition ease-in-out duration-300' src={dollCloth1} alt="" />
                <img className='hover:scale-125 transition ease-in-out duration-300' src={dollCloth2} alt="" />
                <img className='hover:scale-125 transition ease-in-out duration-300' src={dollCloth3} alt="" />
                <img className='hover:scale-125 transition ease-in-out duration-300' src={dollCloth4} alt="" />
            </div>
        </div>
    );
};

export default DollCloth;