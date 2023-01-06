

import { TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                name={props.name}
                label={props.label}
                type={props.password}
                id={props.id}
                autoComplete="current-password"
                autoFocus
            />
        </>
    )
}

export default Input