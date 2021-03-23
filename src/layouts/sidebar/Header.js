import React from 'react';
import SearchBar from '../../components/ui/SearchBar';
// import DashboardSetting from '../../components/DashboardSetting';
import UserNotification from './../../components/notifications/UserNotification';
import UserInfo from '../../components/notifications/UserInfo';

function Header(props) {
    return (
        <div className="header">
            <div className="header-left">
                <div className="menu-icon dw dw-menu" onClick={props.toggleLeftBar}></div>
                <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
                <div className="header-search">
                    <SearchBar />
                </div>
            </div>
            <div className="header-right">
                {/* <DashboardSetting /> */}
                <UserNotification />
                <UserInfo />
            </div>
        </div>
    );
}


export default Header;