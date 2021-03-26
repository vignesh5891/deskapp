import React from 'react';
import { connect } from 'react-redux';
import { toggleLeftBar } from '../../../actions/LeftMenuVisiblity'
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainContainer from '../MainContainer';

class LayoutOne extends React.Component {
    render() {
        return (
            <div>
                <Header toggleLeftBar={this.props.toggleLeftBar} />
                <LeftSidebar
                    lbarVisiblity={this.props.lbarVisiblity}
                    toggleLeftBar={this.props.toggleLeftBar}
                />
                <RightSidebar />
                <MainContainer />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { lbarVisiblity: state.leftMenu.visibleState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLeftBar: () => dispatch(toggleLeftBar())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutOne);