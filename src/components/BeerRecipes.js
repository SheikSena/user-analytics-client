import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MUIDataTable from "mui-datatables";

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
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "tagline",
            label: "TagLine",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "first_brewed",
            label: "First Brewed",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "description",
            label: "Description",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        filter: false,
        filterType: 'dropdown',
        responsive: 'standard',
        fixedHeader: true,
        fixedSelectColumn: true,
        tableBodyHeight: '500px',
        pagination: true,
        rowsPerPage: 100,
        rowsPerPageOptions: [100, 200, 300],
        jumpToPage: true,
    };

    return (
        <MUIDataTable
            title={"Beer Recipes"}
            data={data}
            columns={columns}
            options={options}
        />
    )
}

export default BeerRecipes;
