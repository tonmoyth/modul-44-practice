import { Menu, X } from 'lucide-react';
import './App.css'
import Navbar from './Navbar';
import { useState } from 'react';
import Pricing from './component/pricing/Pricing';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';

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

    const getIntroOfPage = (label) => {
      if (label === 'Page A') {
        return "Page A is about men's clothing";
      }
      if (label === 'Page B') {
        return "Page B is about women's dress";
      }
      if (label === 'Page C') {
        return "Page C is about women's bag";
      }
      if (label === 'Page D') {
        return 'Page D is about household goods';
      }
      if (label === 'Page E') {
        return 'Page E is about food';
      }
      if (label === 'Page F') {
        return 'Page F is about baby food';
      }
      return '';
    };

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        console.log(active, payload, label)
        return (
          <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </div>
        );
      }
    }


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

          <div className=' bg-amber-300'>
          <ResponsiveContainer width='100%' height={400}>
          <BarChart data={StudentMarks}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip content={<CustomTooltip></CustomTooltip>}></Tooltip>
          <Legend></Legend>
            <Bar dataKey='math' barSize={20} fill='#8884d8'></Bar>
          </BarChart>
        </ResponsiveContainer>
          </div>
        
      </main>
    </>
  )
}

export default App
