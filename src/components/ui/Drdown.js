import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { addDropDwonClass, removeDropDwonClass } from '../../actions/Dropdown';
import './Drdown.css';;

class Drdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.ddlParam = { group: this.props.group };
        this.uid = shortid.generate();
    }

    toggleDropdown() {
        if (this.props.ddlClassName === this.props.ddlClass) {
            this.ddlParam[this.uid] = '';
            this.props.hideDropDown(this.ddlParam)
        } else {
            this.ddlParam[this.uid] = this.props.ddlClass;
            this.props.showDropDown(this.ddlParam)
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && this.props.onOutsideClick === 'hide') {
            this.ddlParam[this.uid] = '';
            this.props.hideDropDown(this.ddlParam)
        }
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleDropdown} style={{ cursor: 'pointer' }}>{this.props.anchorContent}</span>
                <div ref={this.wrapperRef} data-uid={this.uid} className={this.props.ddlClassName && this.props.ddlClassName[this.uid] ? this.props.ddlClassName[this.uid] : ''}>
                    {this.props.ddlClassName && this.props.ddlClassName[this.uid] ? this.props.dropdownContent : ''}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { ddlClassName: state.dropDown.dropDownClass };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showDropDown: (payload) => dispatch(addDropDwonClass(payload)),
        hideDropDown: (payload) => dispatch(removeDropDwonClass(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Drdown);

