import React from "react"
import {Grid, TextField, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

import "./EditableField.css"


const EditableField = ({isEdit, setEdit, label, val, setVal,
   variant="inherit", color="", fullWidth=false, isNumber=false,
   textLeft="", textRight="", multiline=false}) => {

    return (
        isEdit ?
            isNumber ?
                <>
                    <Typography variant={variant} color={color} className={"edit-field"}>
                        {textLeft}<TextField
                        type={"number"}
                        label={label}
                        value={val}
                        multiline={multiline}
                        fullWidth={fullWidth}
                        onBlur={() => setEdit(false)}
                        onChange={(e) => {
                            const val = e.target.value
                            if (isNaN(val) || val == "") return
                            setVal(val)
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />{textRight}</Typography>
                    <br/>
                </>


            :
                <>
                    <Typography variant={variant} color={color} className={"edit-field"}>
                        {textLeft}<TextField
                        label={label}
                        value={val}
                        fullWidth={fullWidth}
                        multiline={multiline}
                        onBlur={() => setEdit(false)}
                        onChange={(e) => setVal(e.target.value)}
                    />{textRight}</Typography>
                    <br/>
                </>
        :
        <Typography
            variant={variant}
            color={color}
            onClick={() => setEdit(true)}
        >{textLeft}{val}{textRight} <EditIcon /></Typography>

    )
}

export default EditableField