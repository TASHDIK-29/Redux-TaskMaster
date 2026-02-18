import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TaskForm } from "@/components/ui/form"

export function AddTaskModal() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Task</Button>
                </DialogTrigger>
                {/* <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </Field>
                        <Field>
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent> */}

                <DialogContent className="sm:max-w-md">
                    <DialogHeader className="px-6 pt-6 pb-4">
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>
                           Ensure all the field is populated.
                        </DialogDescription>
                    </DialogHeader>

                    {/* SCROLLABLE BODY */}
                    <div className="flex-1 overflow-y-auto px-6 no-scrollbar">
                        <TaskForm />
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}
