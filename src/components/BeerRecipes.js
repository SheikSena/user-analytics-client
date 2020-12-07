import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function BeerRecipes() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if (data.length <= 0) {
            Axios.get("https://api.punkapi.com/v2/beers").then((response) => {
                setData(response.data)
            });
        }
    });

    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            width: '5%'
        },
        {
            name: 'TagLine',
            selector: 'tagline',
            sortable: true,
            width: '7%'
        },
        {
            name: 'First Brewed',
            selector: 'first_brewed',
            sortable: true,
            width: '3%'
        },
        {
            name: 'Description',
            selector: 'description',
            sortable: true,
        }
    ];

    return (
        <DataTable
            title="Beer Recipes"
            columns={columns}
            data={data}
            pagination={true}
            fixedHeader={true}
            highlightOnHover={true}
        />
    )
}

export default BeerRecipes;
