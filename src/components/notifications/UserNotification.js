import React from 'react';
import Dropdown from '../ui/Dropdown';
import UserNotificationItem from './UserNotificationItem';
import './UserNotification.css';

function UserNotification() {

    return (
        <div className="user-notification">
            <Dropdown
                ddlClass='show-overlap'
                onOutsideClick="hide"
                anchorContent={<span><i className="icon-copy dw dw-notification"></i><span className="badge notification-active"></span></span>}
                dropdownContent={
                    <div className="user-notification-list">
                        <ul>
                            <UserNotificationItem
                                image="assets/images/img.jpg"
                                title="John Doe"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed..."
                            />
                            <UserNotificationItem
                                image="assets/images/photo1.jpg"
                                title="Erik L. Richards"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed..."
                            />
                            <UserNotificationItem
                                image="assets/images/photo2.jpg"
                                title="Lea R. Frith"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed..."
                            />
                        </ul>
                    </div>
                }
            />

        </div>
    );
}


export default UserNotification;