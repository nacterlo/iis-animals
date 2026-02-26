import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"




const updateOrganizationSchema = z
    .object({

    })


export function UpdateOrganizationForm() {

    const form = useForm({
        resolver: zodResolver(updateOrganizationSchema),
        defaultValues: {

        }
    })
    return (
        <form action="">

        </form>
    )
}