import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { toggleLeftBar } from '../../../actions/LeftMenuVisiblity'
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Dashboard from '../Dashboard';
import BasicForm from '../../forms/BasicForm';
import DataTableSample from '../../DataTableSample';
import Footer from '../Footer';

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

                <div className="main-container">
                    <div className="pd-ltr-20">
                        <Switch>
                            <Route path="/basic-form" component={BasicForm} />
                            <Route path="/data-table-sample" component={DataTableSample} />
                            <Route path="/" component={Dashboard} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
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