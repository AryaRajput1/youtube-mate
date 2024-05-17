import { useContext } from "react";
import { AppContext, Context } from "./context";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col h-full">
          <Header />
          <Feed />
        </div>
      ),
      children: [
        {
          path: "searchResult/:searchQuery",
          element: (
            <div className="flex flex-col h-full">
              <Header />
              <SearchResult />
            </div>
          ),
        },
        {
          path: "video/:id",
          element: (
            <div className="flex flex-col h-full">
              <Header />
              <VideoDetails />
            </div>
          ),
        },
      ],
    },
  ]);

  return (
    <AppContext>
      <RouterProvider router={router}></RouterProvider>
    </AppContext>
  );
}

export default App;
