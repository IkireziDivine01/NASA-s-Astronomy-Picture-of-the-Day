import './App.css'
import ApodGallery from './components/ApodGallery'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApodViewer from './components/ApodViewer';
import logo from "./assets/logo.png"

function App() {

  return (
    <Router>
    <div className='absolute top-0 left-2 w-full'>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <img src={logo} className="h-10" alt="NASA Logo" />
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"><Link to="/">APOD</Link></a>
        </li>
        <li>
        <Link to="/gallery"> <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Gallery</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<ApodViewer/>} />
        <Route path="/gallery" element={<ApodGallery />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
