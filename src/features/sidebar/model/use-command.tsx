import { useState } from "react"




export function useCommand() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)


    return {
        isOpen,
        open,
        close,
    }
}