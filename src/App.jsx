import { Menu, X } from 'lucide-react';
import './App.css'
import Navbar from './Navbar';
import { useState } from 'react';
import Pricing from './component/pricing/Pricing';
import { Pie, PieChart } from 'recharts';


const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" }
];

const StudentMarks = [
  {
    id: 1,
    name: "Rahim",
    math: 85,
    physics: 78,
    higherMath: 92
  },
  {
    id: 2,
    name: "Karim",
    math: 75,
    physics: 82,
    higherMath: 88
  },
  {
    id: 3,
    name: "Jamal",
    math: 90,
    physics: 85,
    higherMath: 80
  },
  {
    id: 4,
    name: "Sabbir",
    math: 65,
    physics: 70,
    higherMath: 72
  },
  {
    id: 5,
    name: "Nayeem",
    math: 88,
    physics: 91,
    higherMath: 95
  }
];


const pricingData = fetch('pricing.json').then(res => res.json());
function App() {
    const [open,setOpen] = useState(false);

    const navLink =  navItems.map(route => <Navbar key={route.id} nav={route}></Navbar>);


  return (
    <>
     <nav className='flex justify-between w-11/12 mx-auto pt-4'>
     <span className='flex items-center' onClick={() => setOpen(!open)}>
      {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
     <ul className={`md:hidden absolute transition-all duration-300 z-10
      ${open ? 'top-14 left-4' : 'top-14 -left-40'}
       bg-sky-400 p-4`}>
      {
        navLink
      }
     </ul>
     <h1 className='text-2xl ml-4'>NavBer</h1>
     </span>
        <ul className='md:flex hidden gap-4 '>
            {
               navLink
            }
        </ul> 
        <button className='btn'>Button</button>
     </nav>
      
      <main>
        <Pricing pricingData={pricingData}></Pricing>
        {/* rechart */}
        
        <PieChart width={730} height={230}>

          <Pie data={StudentMarks} dataKey="math" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
        </PieChart>
         
        
      </main>
    </>
  )
}

export default App
