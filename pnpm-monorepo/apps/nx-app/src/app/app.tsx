import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link
} from "react-router-dom";


const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h5>Main page of the NX app</h5>
                <Link to="/another">Go to another page</Link>
            </div>
        ),
    },
    {
        path: "/another",
        element: (
            <div>
                <h5>Another page of the NX app</h5>
                <Link to="/">Go to main page</Link>
            </div>
        )
    },
], { basename: basename });


export function App() {
    return (
        <div className="App">
            <header>
                <p>This is the NX application</p>
            </header>
            <p> Go to <a href="/">the main</a> application</p>
            <p> Go to <a href="/webapp/">another</a> application</p>
            <hr />
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </div>
    );
}

export default App;
