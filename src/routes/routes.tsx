import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { Profile } from "../components/profile/Profile"
import { ImageCommands } from "../components/image-commands/ImageCommands";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                path: 'image-commands',
                Component: ImageCommands
            },
            {
                path: 'text-commands',
                Component: () => <></>
            },
            {
                path: 'profile',
                Component: Profile
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