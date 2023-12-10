import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CreateJob from "../pages/CreateJob";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import Login from "../component/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", element: <Home />
            },
            {
                path: "/about", element: <div>About</div>,
            },
            {
                path: '/post-job', element: <CreateJob />,
            },,
            {
                path: '/my-jobs', element: <MyJobs />,
            },
            {
                path: '/login', element: <Login />,
            },
            {
                path: '/edit-jobs/:id', element: <UpdateJob />,
                loader: ({params}) => fetch(`http://localhost:5000/all-jobs${params.id}`)
            },
        ]
    },

]);

export default router;