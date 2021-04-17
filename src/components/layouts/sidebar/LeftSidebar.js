import React from 'react';
// import Drdown from '../../ui/Drdown';
import { connect } from 'react-redux';
import { toggleLeftMenu } from '../../../actions/LeftMenuVisiblity'
import { DropdwonMenus } from '../../../static-data/DropdownMenus';
import { Link } from "react-router-dom";

class LeftSidebar extends React.Component {
    constructor(props) {
        super(props)
        this.anchorContent = this.anchorContent.bind(this)
        this.dropdownContent = this.dropdownContent.bind(this)
    }

    /** 
     * @param {*} menu 
     * @returns return text if menu has sub menu else link menu will be retruned
     */
    anchorContent(menu) {
        const menuText = (<span>
            <span className={"micon dw " + menu.iconClass}></span>
            <span className="mtext">{menu.name}</span>
        </span>);
        if (menu.subMenus.length) {
            return <span className="dropdown-toggle " style={{ cursor: 'pointer' }}>{menuText}</span>
        } else {
            return <Link to={menu.link} className="dropdown-toggle no-arrow">{menuText}</Link>
        }
    }

    /**
     * @param {*} menu 
     * @returns ul list of sub menu links
     */
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
            <div className={"left-side-bar " + leftBarClass} style={{ overflow: 'scroll' }}>
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
                            {DropdwonMenus.map((menu, index) => {
                                // declaring conditional variables to make html to be readable
                                let isActiveMenu = this.props.activeMenu === index;
                                let liClass = isActiveMenu ? "dropdown show" : "dropdown";
                                let subMenuClass = isActiveMenu ? 'submenu' : '';

                                return (
                                    <li key={index} >
                                        <div
                                            className={liClass}
                                            onClick={() => this.props.toggleLeftMenu(index)}
                                        >
                                            {this.anchorContent(menu)}
                                        </div>

                                        <div className={subMenuClass}>
                                            {isActiveMenu ? this.dropdownContent(menu) : ''}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLeftMenu: (payload) => { dispatch(toggleLeftMenu(payload)) }
    }
}

const mapStateToProps = (state) => {
    return {
        activeMenu: state.lmenuDropDown.activeMenu
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftSidebar);