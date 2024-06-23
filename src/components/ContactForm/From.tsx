"use client"
import React, { DetailedHTMLProps, FormHTMLAttributes, HTMLAttributes, act, useRef } from 'react'

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    action?: (formData: FormData) => Promise<boolean>
}

function From({ children, action, ...rest }: Props) {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <form {...rest} ref={formRef} action={async (formData) => {
            const reset = action && (await action(formData))
            reset && formRef.current?.reset()
        }}>
            {children}
        </form>
    )
}

export default From