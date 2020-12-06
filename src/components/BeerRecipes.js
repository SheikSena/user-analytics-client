import DataTable, { defaultThemes } from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function BeerRecipes() {

    const customStyles = {
        header: {
            style: {
                minHeight: '56px',
            },
        },
        headRow: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: defaultThemes.default.divider.default,
            },
        },
        headCells: {
            style: {
                '&:not(:last-of-type)': {
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor: defaultThemes.default.divider.default,
                },
            },
        },
        cells: {
            style: {
                '&:not(:last-of-type)': {
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor: defaultThemes.default.divider.default,
                },
            },
        },
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("https://api.punkapi.com/v2/beers").then((response) => {
            console.log(data)
            setData(response.data)
        });
    }, []);

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
            name: 'Description',
            selector: 'description',
            sortable: true,
        }
    ];

    return (
        <DataTable
            title="Beer Recipes	"
            columns={columns}
            data={data}
            pagination={true}
            fixedHeader={true}
            highlightOnHover={true}
            striped={true}
            customStyles={customStyles}
        />
    )
}

export default BeerRecipes;
