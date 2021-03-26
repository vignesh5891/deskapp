import React from 'react';
import SearchBar from '../../ui/SearchBar';
import UserNotification from './../../notifications/UserNotification';
import UserInfo from '../../notifications/UserInfo';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="menu-icon dw dw-menu" onClick={this.props.toggleLeftBar}></div>
                    <div className="search-toggle-icon dw dw-search2" ></div>
                    <div className="header-search">
                        <SearchBar />
                    </div>
                </div>
                <div className="header-right">
                    <UserNotification />
                    <UserInfo />
                </div>
            </div>
        );
    }
}

