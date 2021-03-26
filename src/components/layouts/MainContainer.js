import React from 'react';
import WelcomeCard from '../ui/WelcomeCard';
import ActivityChart from '../charts/ActivityChart';
import TargetChart from '../charts/TargetChart';
import DataTable from '../ui/dataTable/DataTable';
import Footer from './Footer';
import listData from '../../static-data/ProductData';

const specialObjs = {
    Product: { type: 'img', maxWidth: '50px' },
    Action: { type: 'button', buttonText: 'View', className: 'btn-primary' },
    exp: { type: 'exclude' }
};

function MainConainer() {
    return (
        <div className="main-container">
            <div className="pd-ltr-20">
                <WelcomeCard
                    imageUrl="assets/images/banner-img.png"
                    welecomText="Welcome back"
                    userName="Johnny Brown!"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic non repellendus debitis iure, doloremque assumenda. Autem modi, corrupti, nobis ea iure fugiat, veniam non quaerat mollitia animi error corporis."
                />

                <div className="row">
                    <div className="col-xl-8 mb-30">
                        <ActivityChart />
                    </div>
                    <div className="col-xl-4 mb-30">
                        <TargetChart />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 mb-30">
                        <div className="card-box height-100-p">
                            <DataTable listData={listData} specialObjs={specialObjs} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}


export default MainConainer;