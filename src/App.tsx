import './App.css'
import { RootState } from './app/store'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


function App() {
  // const [count, setCount] = useState(0)
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()

  // return (
  //   <div>
  //     <div>
  //       <button
  //         aria-label="Increment value"
  //         onClick={() => dispatch(increment())}
  //       >
  //         Increment
  //       </button>
  //       <span>{count}</span>
  //       <button
  //         aria-label="Decrement value"
  //         onClick={() => dispatch(decrement())}
  //       >
  //         Decrement
  //       </button>
  //     </div>
  //   </div>
  // )

  return <RouterProvider router={router} />
}

export default App
