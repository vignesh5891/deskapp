import React from 'react';

import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ddlClass: '' };
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleDropdown() {
        if (this.state.ddlClass == this.props.ddlClass) {
            this.setState({ ddlClass: '' });
        } else {
            this.setState(state => ({ ddlClass: this.props.ddlClass }));
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && this.props.onOutsideClick == 'hide') {
            this.setState(state => ({ ddlClass: '' }));
        }
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.toggleDropdown}>{this.props.anchorContent}</a>
                <div ref={this.wrapperRef} className={this.state.ddlClass}>
                    {this.state.ddlClass ? this.props.dropdownContent : ''}
                </div>
            </div>
        );
    }

}

export default Dropdown;

