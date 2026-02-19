import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid'; //--> for uniq ID


interface InitialState {
    tasks: ITask[];
    filter: 'All' | 'High' | 'Medium' | 'Low'
}

const initialState: InitialState = {
    tasks: [
        {
            id: '00001',
            title: 'Learning redux',
            description: 'redux is going to be the game changer.',
            dueDate: '18-02-2026',
            isCompleted: false,
            priority: 'High',
            "assign-to": '001'
        }
    ],
    filter: 'All'
}


// better approach
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assign-to">;
type DraftTaskForUpdate = Pick<ITask, "id" | "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const newTask = createTask(action.payload);
            state.tasks.push(newTask);
        },

        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.tasks.forEach((task) =>
                task.id === action.payload ? task.isCompleted = !task.isCompleted : task
            );
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

        updateTask: (state, action: PayloadAction<DraftTaskForUpdate>) => {
            console.log("From updateTask ==> ", action.payload);
            state.tasks.forEach((task) =>
                task.id === action.payload.id ?
                    (
                        task.title = action.payload.title,
                        task.description = action.payload.description,
                        task.dueDate = action.payload.dueDate,
                        task.priority = action.payload.priority
                    )
                    : task
            );
        },

        updateFilter: (state, action: PayloadAction<"All" | "Low" | "Medium" | "High">) => {
            state.filter = action.payload;
        }
    }
})


export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;

    if (filter != 'All') {
        return state.todo.tasks.filter(t => t.priority === filter);
    }

    return state.todo.tasks;
}

export const selectSingleTasks = (state: RootState, id: string) => {
    return state.todo.tasks.find(task => task.id === id);
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}


export const { addTask, toggleCompleteState, deleteTask, updateTask, updateFilter } = taskSlice.actions;


export default taskSlice.reducer;