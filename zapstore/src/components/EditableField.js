import React from "react"
import {Grid, TextField, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


const EditableField = ({text, isEdit, setEdit, label, val, setVal,
   variant="inherit", color="", fullWidth=false}) => {

    return (
        isEdit ?
            <TextField
                label={label}
                onBlur={() => setEdit(false)}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                fullWidth={fullWidth}
            />
        :
        <Typography
            variant={variant}
            color={color}
            onClick={() => setEdit(true)}
        >{val} <EditIcon /></Typography>


    )
}

export default EditableField