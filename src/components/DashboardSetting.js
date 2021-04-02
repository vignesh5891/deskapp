import React from 'react';
import Dropdown from './Dropdown';

function DashboardSetting() {
    return (
        <div className="dashboard-setting user-notification">
            <Dropdown
                anchorContent={<i className="dw dw-settings2"></i>}
                dropdownContent={'testtest'}
            />
        </div>
    );
}

export default DashboardSetting;