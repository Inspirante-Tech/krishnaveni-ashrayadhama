"use client"
import React, { HTMLAttributes } from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

interface Props extends HTMLAttributes<HTMLButtonElement> {
}

function SubmitButton({ children, ...rest }: Props) {
    const { pending } = useFormStatus();
    return (
        <Button
            {...rest}
            disabled={pending}
        >
            {children}
        </Button>
    )
}

export default SubmitButton