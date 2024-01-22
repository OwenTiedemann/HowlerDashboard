import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { ImageCommands } from "../components/image-commands/ImageCommands";
import { TextCommands } from "../components/text-commands/TextCommands";

const routes = createBrowserRouter([
    {
        path: '*',
        Component: Home,
        children: [
            {
                path: 'image-commands',
                Component: ImageCommands
            },
            {
                path: 'text-commands',
                Component: TextCommands
            },
            {
                path: '*',
                Component: () => <Navigate to={'/'}/>
            }
        ]
    },
    {
        path: '/login',
        Component: Login,
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider router={routes}/>
    )
}