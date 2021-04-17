import React from 'react';
import './UserNotificationItem.css';

function UserNotificationItem(props) {
    return (
        <li>
            <a href="no-link" className="text-left">
                <img src={props.image} alt="" className="notificationImg" />
                <b className="notificaiton-title">{props.title}</b>
                <span className="notificaiton-desc">{props.description}</span>
            </a>
        </li>
    );
}


export default UserNotificationItem;