import React from 'react';
import Dropdown from '../ui/Dropdown';

function UserInfo() {
    return (
        <div className="user-info-dropdown" style={{ padding: "20px 10px" }}>
            <Dropdown
                ddlClass='show-overlap'
                onOutsideClick="hide"
                anchorContent={<span>
                    <span className="user-icon">
                        <img src="assets/images/photo1.jpg" style={{ width: '25px', borderRadius: '50%' }} alt="" />
                    </span>
                    <span className="user-name">Ross C. Lopez</span>
                </span>}
                dropdownContent={<div>
                    <a href="#" className="dropdown-item" ><i className="dw dw-user1"></i> Profile</a>
                    <a href="#" className="dropdown-item" ><i className="dw dw-settings2"></i> Setting</a>
                    <a href="#" className="dropdown-item" ><i className="dw dw-help"></i> Help</a>
                    <a href="#" className="dropdown-item" ><i className="dw dw-logout"></i> Log Out</a>
                </div>}
            />
        </div>
    );
}


export default UserInfo;