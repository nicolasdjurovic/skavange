import { Link } from 'react-router-dom';
import { BsThreeDots, BsPerson } from '../node_modules/react-icons/bs'
import { FiSettings } from '../node_modules/react-icons/fi'
import { BiSun, BiMoon } from '../node_modules/react-icons/bi'





import Navbar from './Navbar';
import Footer from './Footer';



function App() {


  return (

    <div className="">


      <Navbar />

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center ">
          <div className="max-w-md flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Are you a reseller?</h1>
            <p className="py-6">This is the only tool you need to be a profitable reseller. Just search for a product, and get links that you can flip for profit. <i>The perfect potion.</i></p>
            <div className="divider mt-0"></div>

            {/* if auth */}
            <div className='flex justify-center items-center space-x-4'>
              <Link to="/login" className="btn btn-primary">Log In</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>

            {/* else auth */}
            <div className='flex flex-col justify-center items-center space-y-4'>
              <h1>Welcome <span className='text-accent'>placeholder@email.com</span>, visit the dashboard!</h1>
              <Link to="/" className="btn btn-primary">Dashboard</Link>
            </div>

          </div>
        </div>
      </div>



      <Footer />

    </div>


  );
}

export default App;
