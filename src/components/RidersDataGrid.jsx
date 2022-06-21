import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';

const RidersDataGrid = () => {
    const columns = [
        {field: "username", headerName: "Username", flex: 1},
        {field: "name", headerName: "Name", flex: 1},
        {field: "rating", headerName: "Rating", type: "number", flex: 1, valueGetter: ({value}) => value.toFixed(1)},
        {field: "nDeliveries", headerName: "# Deliveries Made", type: "number", flex: 1},
        {field: "id", headerName: "ID", flex: 1},
    ];

    const [pageSize, setPageSize] = useState(10);
    const [ridersInfo, setRidersInfo] = useState([]);

    useEffect(() => {
        setRidersInfo(
            [
                {
                    "username": "babydweet",
                    "name": "Dwight Fairfield",
                    "rating": 4.0,
                    "nDeliveries": 1984,
                    "id": 1
                },
                {
                    "username": "meghead",
                    "name": "Meg Thomas",
                    "rating": 1.8,
                    "nDeliveries": 1337,
                    "id": 2
                },
                {
                    "username": "Blendette",
                    "name": "Claudette Morel",
                    "rating": 2.3,
                    "nDeliveries": 39,
                    "id": 3
                },
                {
                    "username": "IronWillFC",
                    "name": "Jake Park",
                    "rating": 3.7,
                    "nDeliveries": 324,
                    "id": 4
                },
                {
                    "username": "toxic_nea",
                    "name": "Nea Karlsson",
                    "rating": 3.3,
                    "nDeliveries": 96,
                    "id": 5
                },
                {
                    "username": "DS_Andy",
                    "name": "Laurie Strode",
                    "rating": 3.0,
                    "nDeliveries": 112,
                    "id": 6
                },
                {
                    "username": "BigBrainAceMain",
                    "name": "Ace Visconti",
                    "rating": 4.9,
                    "nDeliveries": 506,
                    "id": 7
                },
                {
                    "username": "unbreakabill",
                    "name": "William Overbeck",
                    "rating": 4.3,
                    "nDeliveries": 907,
                    "id": 8
                },
                {
                    "username": "fengmoon",
                    "name": "Feng Min",
                    "rating": 4.1,
                    "nDeliveries": 322,
                    "id": 9
                },
                {
                    "username": "MrKing",
                    "name": "David King",
                    "rating": 4.4,
                    "nDeliveries": 13,
                    "id": 10
                },
                {
                    "username": "NotSTEVE",
                    "name": "Steve Harrington",
                    "rating": 4.8,
                    "nDeliveries": 989,
                    "id": 11
                },
                {
                    "username": "girlfoe",
                    "name": "Isabel Rosário",
                    "rating": 0.1,
                    "nDeliveries": 666,
                    "id": 12
                },
            ]
        );
    }, []);

    const handleOnCellClick = (params) => {
        console.log(`Clicked on rider with ID: ${params.id}`);
    }


    return (
        <>
            {
                ridersInfo.length === 0 ?
                    (
                        <CircularProgress/>
                    ) : (
                        <DataGrid
                            rows={ridersInfo}
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[5, 10, 15]}
                            pagination
                            autoHeight
                            disableSelectionOnClick
                            onCellClick={handleOnCellClick}
                        />
                    )
            }
        </>
    );
}

export default RidersDataGrid;