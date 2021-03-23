import React from 'react';
import DataTableRows from './DataTableRows';
import DataTableHead from './DataTableHead';

class DataTable extends React.Component {
    constructor(props) {
        super(props);

        const listData = (this.props.listData) ? this.props.listData : [];
        const specialObjs = (this.props.specialObjs) ? this.props.specialObjs : [];
        const tableHeadings = (listData.length) ? Object.keys(listData[0]) : [];

        this.state = { listData: listData, tableHeadings: tableHeadings, specialObjs: specialObjs }
    }

    render() {
        return (
            <table className="data-table table nowrap">
                <thead>
                    <tr>
                        <DataTableHead
                            DataHeadings={this.state.tableHeadings}
                            specialObjs={this.state.specialObjs}
                        />
                    </tr>
                </thead>
                <tbody>
                    <DataTableRows
                        dataRows={this.state.listData}
                        specialObjs={this.state.specialObjs}
                    />
                </tbody>
            </table>
        );
    }
}


export default DataTable;