import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
    // const { tasks } = useAppSelector((state) => state.todo);
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex items-center justify-between">
                <h1>
                    Tasks
                </h1>

                <Tabs defaultValue="All" className="">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter("All"))} value="All">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
                    </TabsList>
                    {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent> */}
                </Tabs>

                <AddTaskModal />
            </div>

            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tasks;