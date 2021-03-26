import React from 'react';
import Dropdown from '../../ui/Dropdown';
import { DropdwonMenus } from '../../../static-data/DropdownMenus';

class LeftSidebar extends React.Component {
    render() {
        let leftBarClass = this.props.lbarVisiblity ? " open" : " ";
        return (

            <div className={"left-side-bar " + leftBarClass} >
                <div className="brand-logo">
                    <a href="index.html">
                        <img src="assets/images/deskapp-logo.svg" alt="" className="dark-logo" />
                        <img src="assets/images/deskapp-logo-white.svg" alt="" className="light-logo" />
                    </a>
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
                                            anchorContent={<a href="#" className={menu.subMenus.length ? "dropdown-toggle " : "dropdown-toggle no-arrow"}>
                                                <span className={"micon dw " + menu.iconClass}></span><span className="mtext">{menu.name}</span>
                                            </a>}
                                            dropdownContent={<ul >
                                                {menu.subMenus.map((submenu, i) => {
                                                    return <li key={i}><a href={submenu.link}>{submenu.name}</a></li>;
                                                })}
                                            </ul>}
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