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
            <p className="py-6">This is a great tool that helps you predict future prices on eBay. Just search for a product and <i>see the future.</i></p>
            <div className="divider mt-0"></div>

            <div className='flex flex-col justify-center items-center space-y-4'>
              <h1>Welcome, visit the dashboard!</h1>
              <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
            </div>

          </div>
        </div>
      </div>



      <Footer />

    </div>


  );
}

export default App;
