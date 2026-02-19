import UserCard from "@/components/module/users/UserCard";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { addUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const User = () => {
    const users = useAppSelector(selectUsers);

    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            name: "",
        },
    })


    function onSubmit(data) {
        toast("You submitted the following values:", {
            description: (
                <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })

        form.reset();
        // console.log(data);
        dispatch(addUser(data));
    }

    return (
        <div className="p-20 space-y-12">
            <div className="flex justify-end">
                <Drawer direction="top">
                    <DrawerTrigger className="p-2 border border-slate-500 rounded-2xl">Add User</DrawerTrigger>
                    <DrawerContent className="px-80">
                        <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Controller
                                    name="name"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <DrawerTitle>
                                                Username
                                            </DrawerTitle>
                                            <Input
                                                {...field}
                                                id="form-rhf-input-name"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Enter Your Name"
                                                autoComplete="off"
                                            />
                                        </Field>
                                    )}
                                />
                            </FieldGroup>
                        </form>

                        <DrawerFooter>
                            <Field orientation="horizontal">
                                <Button type="button" variant="outline" onClick={() => form.reset()}>
                                    Reset
                                </Button>


                                <DrawerClose asChild>
                                    <Button type="submit" form="form-rhf-input">
                                        Save
                                    </Button>
                                </DrawerClose>
                            </Field>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    users.map((user, idx) => (
                        <UserCard
                            key={idx}
                            user={user}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default User;