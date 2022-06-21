import React from "react"
import {Box, Button, Modal, Typography} from "@mui/material";

const BasicModal = ({open, setOpen, onClose=()=>{}, title="", text="", type=""}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false)
                    onClose()
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {title !== "" &&
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            color={type !== "" ? type : "primary"}
                        >
                            {title}
                        </Typography>
                    }

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {text}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default BasicModal