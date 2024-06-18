import { HTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { cn } from '~/lib/utils';

interface DialogProps extends HTMLAttributes<HTMLDialogElement> {
    closeCallback?: () => void
}

export interface DialogRef {
    close: () => void;
    open: () => void;
}

const Dialog = forwardRef<DialogRef, DialogProps>(
    ({ closeCallback, ...props }, ref) => {

        const dialogRef = useRef<HTMLDialogElement>(null);

        const close = () => {
            dialogRef.current?.close()
        }

        const open = () => {
            document.body.classList.add("prevent-scroll");
            dialogRef.current?.showModal()
        }

        useEffect(() => {
            if (dialogRef.current) {
                const fn = () => {
                    closeCallback && closeCallback();
                    document.body.classList.remove("prevent-scroll");
                }
                dialogRef.current.addEventListener("close", fn)
                // eslint-disable-next-line react-hooks/exhaustive-deps
                return () => dialogRef.current?.removeEventListener("close", fn)
            }
        }, [closeCallback])

        useImperativeHandle(ref, () => ({
            close,
            open
        }));

        return (

            <dialog
                ref={dialogRef}
                className={cn(props.className)}
                onClick={close}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full h-full"
                >
                    {props.children}

                </div>

            </dialog>
        )
    }
);

Dialog.displayName = "Dialog"

export default Dialog