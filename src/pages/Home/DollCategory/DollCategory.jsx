import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from '../SubCategory/SubCategory';

const DollCategory = () => {
    const [dolls, setDolls] = useState([]);
    const [activeTab, setActiveTab] = useState("baby");
    

    useEffect(() => {
        fetch('dolls.json')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])

    const result = dolls.filter((doll) => doll.category == activeTab);
    // console.log(result);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div className='mt-10 mb-6'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-600'>Doll Category</h2>

            <p>dolls {dolls.length}</p>


            {/* <div>
                {
                    dolls?.map(subDolls => <SubCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                    ></SubCategory>)
                }
            </div> */}


            <Tabs className="text-center">

                <TabList>
                    <Tab onClick={() => handleTabClick("baby")}>Bady Dolls</Tab>
                    <Tab onClick={() => handleTabClick("barbie")}>Barbie Dolls</Tab>
                    <Tab onClick={() => handleTabClick("american")}>American Dolls</Tab>
                    {/* <Tab >Bady Dolls</Tab> */}
                    {/* <Tab >Barbie Dolls</Tab>
                    <Tab >American Dolls</Tab> */}
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <div>
                    {
                        result?.map(subDolls => <SubCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                        ></SubCategory>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    {
                        result?.map(subDolls => <SubCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                        ></SubCategory>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    {
                        result?.map(subDolls => <SubCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                        ></SubCategory>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DollCategory;