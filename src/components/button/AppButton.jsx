

import React from 'react'
import Button from '@mui/material/Button';

const AppButton = (props) => {
    return (
        <>
            <Button
                onClick={props.onClick}
                sx={{ mt: 3, mb: 2 }}
                variant={props.variant}
                type={props.type}
                fullWidth>
                {props.text}
            </Button>
        </>
    )
}

export default AppButton