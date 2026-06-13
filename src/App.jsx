import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import SingleProducts from "./Pages/SingleProducts"
import Cart from "./Pages/Cart"
import ScrollToTop from "./components/ScrollToTop"

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <SingleProducts />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
