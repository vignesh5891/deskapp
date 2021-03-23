import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainContainer from '../MainContainer';

class LayoutOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lbarVisiblity: false };

        this.lbarRef = React.createRef();
        this.setlbarRef = this.setlbarRef.bind(this);
        this.toggleLeftBar = this.toggleLeftBar.bind(this);

    }

    setlbarRef(node) {
        this.lbarRef = node;
    }

    toggleLeftBar() {
        console.log(this.state)
        this.setState(state => ({ lbarVisiblity: !this.state.lbarVisiblity }));
    }

    render() {
        return (
            <div>
                <Header toggleLeftBar={this.toggleLeftBar} />
                <LeftSidebar
                    lbarVisiblity={this.state.lbarVisiblity}
                    lbarRef={this.lbarRef}
                    toggleLeftBar={this.toggleLeftBar}
                />
                <RightSidebar />
                <MainContainer />
            </div>
        );
    }

}

export default LayoutOne;