import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/type";
import { Trash2 } from "lucide-react";
import { UpdateTaskModal } from "./UpdateTaskModal";
import { selectSingleUsers } from "@/redux/features/user/userSlice";

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {
    const dispatch = useAppDispatch();

    const assignedUser = useAppSelector((state) => selectSingleUsers(state, task["assign-to"]))

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    {/* by clsx + tailwind-merge */}
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "Low",
                        "bg-orange-500": task.priority === "Medium",
                        "bg-red-500": task.priority === "High",
                    })} />
                    <h1 className={cn("text-[24px]", { "line-through": task.isCompleted })}>
                        {task.title}
                    </h1>
                </div>


                <div className="flex gap-3 items-center">
                    <UpdateTaskModal id={task.id} />

                    <Button
                        onClick={() => dispatch(deleteTask(task.id))}
                        variant={"link"} className="p-0 text-red-500">
                        <Trash2 className="size-6" />
                    </Button>

                    <Checkbox
                        checked={task.isCompleted}
                        onClick={() => dispatch(toggleCompleteState(task.id))} />
                </div>
            </div>
            <h1 className={cn("text-[24px] text-green-600", { "line-through": task.isCompleted })}>
                Assigned To : {assignedUser?.name}
            </h1>
            <p className="mt-5">
                {task.description}
            </p>
        </div>
    );
};

export default TaskCard;