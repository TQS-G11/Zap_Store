import React, {useState} from "react"
import {Typography} from "@mui/material";
import EditableField from "./EditableField";

const ProductDescription = ({product}) => {

    const [nameEdit, setNameEdit] = useState(false)
    const [nameText, setNameText] = useState(product.name)

    return (
        <>
            {/*<Typography variant={"h4"}>{product.name}</Typography>*/}
            <EditableField
                text={product.name}
                variant={"h4"}
                isEdit={nameEdit}
                setEdit={setNameEdit}
                label={"Name"}
                val={nameText}
                setVal={setNameText}
                fullWidth
            />
            <Typography variant={"h5"}>€{product.price}</Typography>
            <Typography variant={"h6"}>{product.quantity} in stock.</Typography>
            <Typography color={"text.secondary"}>{product.description}</Typography>

        </>
    )


}

export default ProductDescription