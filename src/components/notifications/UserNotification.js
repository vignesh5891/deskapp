import React from 'react';
import Drdown from '../ui/Drdown';
import UserNotificationItem from './UserNotificationItem';
import './UserNotification.css';
import { UserNotifications } from '../../static-data/UserNotifications';

export default class UserNotification extends React.Component {
    constructor(props) {
        super(props)
        this.anchorContent = this.anchorContent.bind(this)
        this.dropdownContent = this.dropdownContent.bind(this)
    }

    anchorContent() {
        return (
            <span><i className="icon-copy dw dw-notification"></i><span className="badge notification-active"></span></span>
        )
    }

    dropdownContent() {
        return (
            <div className="user-notification-list">
                <ul>
                    {
                        UserNotifications.map((notification, index) => {
                            return <UserNotificationItem
                                key={index}
                                image={notification.image}
                                title={notification.title}
                                description={notification.description}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="user-notification">
                <Drdown
                    ddlClass='show-overlap'
                    onOutsideClick="hide"
                    anchorContent={this.anchorContent()}
                    dropdownContent={this.dropdownContent()}
                />
            </div>
        );
    }
}

