import React from 'react';
import TableRows from './TableRows';
import TableHead from './TableHead';

class SimpleTable extends React.Component {
    constructor(props) {
        super(props);

        this.listData = (this.props.listData) ? this.props.listData : [];
        this.specialObjs = (this.props.specialObjs) ? this.props.specialObjs : [];
        this.tableHeadings = (this.listData.length) ? Object.keys(this.listData[0]) : [];
    }

    render() {
        return (
            <table className="data-table table nowrap">
                <thead>
                    <tr>
                        <TableHead
                            DataHeadings={this.tableHeadings}
                            specialObjs={this.specialObjs}
                        />
                    </tr>
                </thead>
                <tbody>
                    <TableRows
                        dataRows={this.listData}
                        specialObjs={this.specialObjs}
                    />
                </tbody>
            </table>
        );
    }
}


export default SimpleTable;