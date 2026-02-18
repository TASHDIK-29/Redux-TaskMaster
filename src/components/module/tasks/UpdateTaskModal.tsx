import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Settings2 } from "lucide-react"
import { UpdatedTaskForm } from "./UpdatedTaskForm"

interface IProp {
    id: string;
}

export function UpdateTaskModal({ id }: IProp) {    

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button
                        variant={"link"} className="p-0 text-slate-500">
                        <Settings2 className="size-6" />
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                    <DialogHeader className="px-6 pt-6 pb-4">
                        <DialogTitle>Update Task</DialogTitle>
                        <DialogDescription>
                            Ensure all the field is populated.
                        </DialogDescription>
                    </DialogHeader>

                    {/* SCROLLABLE BODY */}
                    <div className="flex-1 overflow-y-auto px-6 no-scrollbar">
                        <UpdatedTaskForm id={id} />
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}
