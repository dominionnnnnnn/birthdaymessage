import Hero from "./components/Hero"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route >
        <Route index element={<Hero/>} />
      </Route>
    </>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
