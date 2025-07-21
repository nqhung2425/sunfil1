import './App.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
