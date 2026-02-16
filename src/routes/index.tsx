import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello, World!</div>
        Component: App,
        children: [
            {
                path: "users",
                Component: User
            },
            {
                index: true,
                Component: Tasks
            },
            {
                path: "tasks",
                Component: Tasks
            },
        ]
    },
])

export default router;