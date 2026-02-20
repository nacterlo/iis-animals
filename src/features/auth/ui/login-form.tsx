import { Button } from "@/shared/ui/kit/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/kit/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/kit/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { useLogin } from "../model/use-login";




const loginFormSchema = z.object({
    login: z
        .string()
        .min(5, "Логин должен содержать не менее 6 символов."),
    password: z
        .string()
        .min(6, "Пароль должен содержать не менее 6 символов.")
})


export function LoginForm() {

    const { login, isPending, errorMessage } = useLogin()
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            login: "",
            password: ""
        }
    })

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data: z.infer<typeof loginFormSchema>) => login(data)
    
    return (
        <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center max-w-2xl">
                    <h1 className="text-2xl font-bold">Вход в аккаунт</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Введите логин и пароль, чтобы войти в свой аккаунт.
                    </p>
                </div>

                <Controller
                    name="login"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Логин</FieldLabel>

                            <InputGroup>
                                <InputGroupInput
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Логин"
                                />
                                <InputGroupAddon>
                                    <UserIcon />
                                </InputGroupAddon>
                            </InputGroup>

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <div className="flex items-center">
                                <FieldLabel htmlFor={field.name}>Пароль</FieldLabel>
                                <a
                                    href="#"
                                    className="ml-auto text-sm underline-offset-4 hover:underline"
                                >
                                    Забыли пароль?
                                </a>
                            </div>
                            <InputGroup>
                                <InputGroupInput
                                    {...field}
                                    id={field.name}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Пароль"
                                    autoComplete="on"
                                />
                                <InputGroupAddon>
                                    <LockIcon />
                                </InputGroupAddon>
                                <InputGroupAddon align='inline-end'>
                                    {showPassword ?
                                        (<EyeOffIcon className="size-5 cursor-pointer text-ring" onClick={togglePasswordVisibility} />) :
                                        (<EyeIcon className="size-5 cursor-pointer text-ring" onClick={togglePasswordVisibility} />)
                                    }
                                </InputGroupAddon>
                            </InputGroup>

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                {errorMessage && (
                    <FieldError errors={[{ message: errorMessage }]} />
                )}

                <Field className="mt-2">
                    <Button
                        type="submit"
                        className="font-semibold active:scale-98 transition duration-150"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                                Вход...
                            </>
                        ) : (
                            <>Войти в аккаунт</>
                        )}
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        Вход только для администратора ИИС
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}