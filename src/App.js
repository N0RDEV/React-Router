import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements
const appRouter = <Route path="/" element={ <Root/> }></Route>;

function App() {
  return (
    // replace below with a Router Provider
    <p>REPLACE ME</p>
  );
}

export default App;

