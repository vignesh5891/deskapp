import React from 'react';
import Dropdown from '../../ui/Dropdown';
import { DropdwonMenus } from '../../../static-data/DropdownMenus';
import { Link } from "react-router-dom";

class LeftSidebar extends React.Component {
    constructor(props) {
        super(props)
        this.anchorContent = this.anchorContent.bind(this)
        this.dropdownContent = this.dropdownContent.bind(this)
    }
    anchorContent(menu) {
        if (menu.subMenus.length) {
            return (
                <span className="dropdown-toggle " >
                    <span className={"micon dw " + menu.iconClass}></span>
                    <span className="mtext">{menu.name}</span>
                </span>
            )
        } else {
            return (
                <Link to={menu.link} className="dropdown-toggle no-arrow">
                    <span className={"micon dw " + menu.iconClass}></span>
                    <span className="mtext">{menu.name}</span>
                </Link>
            )
        }
    }

    dropdownContent(menu) {
        return (
            <ul >
                {menu.subMenus.map((submenu, i) => {
                    return <li key={i}><Link to={submenu.link}>{submenu.name}</Link></li>;
                })}
            </ul>
        )
    }

    render() {
        let leftBarClass = this.props.lbarVisiblity ? " open" : " ";
        return (

            <div className={"left-side-bar " + leftBarClass} >
                <div className="brand-logo">
                    <Link to="/">
                        <img src="assets/images/deskapp-logo.svg" alt="" className="dark-logo" />
                        <img src="assets/images/deskapp-logo-white.svg" alt="" className="light-logo" />
                    </Link>
                    <div className="close-sidebar" onClick={this.props.toggleLeftBar}>
                        <i className="ion-close-round"></i>
                    </div>
                </div>
                <div className="menu-block customscroll">
                    <div className="sidebar-menu">
                        <ul id="accordion-menu">
                            {
                                DropdwonMenus.map((menu, index) => {
                                    return <li className="dropdown" key={index}>
                                        <Dropdown
                                            ddlClass='submenu'
                                            anchorContent={this.anchorContent(menu)}
                                            dropdownContent={this.dropdownContent(menu)}
                                            uni='lmenu'
                                        />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default LeftSidebar;