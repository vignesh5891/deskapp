import DataTable from 'react-data-table-component';
import React from 'react';
import { listData } from '../static-data/ProductData'

const columns = [
    {
        name: 'Product',
        selector: 'Product',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'Name',
        sortable: true,
        right: true,
    },
    {
        name: 'Color',
        selector: 'Color',
        sortable: true,
    },
    {
        name: 'Size',
        selector: 'Size',
        sortable: true,
    },
    {
        name: 'Price',
        selector: 'Price',
        sortable: true,
    },
    {
        name: 'Qty',
        selector: 'Oty',
        sortable: true,
    },
];

export default function DataTableSample() {
    return (
        <DataTable
            title="Product Details"
            columns={columns}
            data={listData}
            pagination={true}
            defaultSortField='Name'
        />
    )
}