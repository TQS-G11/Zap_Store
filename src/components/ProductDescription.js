import React, {useEffect, useState} from "react"
import {Typography} from "@mui/material";
import EditableField from "./EditableField";

const ProductDescription = ({product, canEdit, setUpdates}) => {

    const prodName = product.name
    const prodPrice = product.price
    const prodQntd = product.quantity
    const prodDesc = product.description


    const [nameEdit, setNameEdit] = useState(false)
    const [nameText, setNameText] = useState(prodName)

    const [priceEdit, setPriceEdit] = useState(false)
    const [priceText, setPriceText] = useState(prodPrice)

    const [stockEdit, setStockEdit] = useState(false)
    const [stockText, setStockText] = useState(prodQntd)

    const [descEdit, setDescEdit] = useState(false)
    const [descText, setDescText] = useState(prodDesc)

    const hadUpdates = () => {
        return !(prodName === nameText && prodPrice === priceText && prodQntd === stockText && prodDesc === descText)
    }

    useEffect(() => {
        setUpdates(hadUpdates())
    }, [nameText, priceText, stockText, descText])


    return (
        <>
            {canEdit ?
                <>
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
                    <EditableField
                        variant={"h5"}
                        isEdit={priceEdit}
                        setEdit={setPriceEdit}
                        label={"Price"}
                        val={priceText}
                        setVal={setPriceText}
                        isNumber
                        textLeft={"€"}
                    />
                    <EditableField
                        variant={"h6"}
                        isEdit={stockEdit}
                        setEdit={setStockEdit}
                        label={"Quantity"}
                        val={stockText}
                        setVal={setStockText}
                        isNumber
                        textRight={" in stock."}
                    />
                    <EditableField
                        isEdit={descEdit}
                        color={"text.secondary"}
                        setEdit={setDescEdit}
                        label={"Quantity"}
                        val={descText}
                        setVal={setDescText}
                        multiline
                    />

                </>

            :
                <>
                    <Typography variant={"h4"}>{product.name}</Typography>
                    <Typography variant={"h5"}>€{product.price}</Typography>
                    <Typography variant={"h6"}>{product.quantity} in stock.</Typography>
                    <Typography color={"text.secondary"}>{product.description}</Typography>
                </>
            }

        </>
    )


}

export default ProductDescription