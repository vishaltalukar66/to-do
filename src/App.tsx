import { useEffect, useState } from "react";
import logo from './assets/Black___White_Minimalist_Business_Logo-removebg-preview.png';
import clock from './assets/alarm-clock-deadline-svgrepo-com.svg';
import calender from './assets/calendar-general-month-2-svgrepo-com.svg';
import circle from './assets/circle-svgrepo-com.svg';
import addButton from './assets/circle-plus-svgrepo-com.svg';



export default function App() {
  const [today, setToday] = useState(new Date());
  const [containerHeight, setContainerHeight] = useState(0);
  console.log(`${containerHeight}`);
  console.log(today.getTime());

  // to update for every 30 seconds
  useEffect(() => {
    const windowHeight = window.innerHeight;
    setContainerHeight(windowHeight - 260);
    setInterval(() => {
      setToday(new Date())
    }, 30000);
  }, [])

  return (
    <div className="h-screen w-full bg-slate-100">
      <div className='flex justify-center'>
        <img src={logo} className='w-15 h-20 center' alt="" />
      </div>
      <div className='flex justify-center text-black m-2'>

        <img src={clock} className="h-7 w-7 m-2" alt="" />
        <span className='text-black ml-2 font-mono font-bold m-2'>{today.toLocaleDateString()}</span>
        <img src={calender} className="h-7 w-7 m-2" alt="" />
        <span className='text-black ml-2 font-mono font-bold m-2'>
          {today.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}</span>


      </div>
      {/* header ends here */}


      {/* body to display taks */}
      <div className=" h-2/3 overflow-y-scroll mb-10">
        {/* <div className="mb-[150px]"> */}
        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 '>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify w-full text-black"> Tasks - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae magni veniam dolore nam sapiente atque, velit neque esse facere laudantium quisquam cupiditate nobis eius dolorem deleniti voluptatem est at.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium culpa laborum? Quidem nihil, ratione alias autem dolorum voluptatibus soluta voluptatum, fuga inventore eos, repellendus dicta voluptas? Magnam, eveniet aut.
            </div>


          </div>
        </div>


        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full'>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify text-black"> Tasks - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae magni veniam doloredolor sit amet, consectetur adipisicing elit.
            </div>


          </div>
        </div>



        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full'>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify text-black"> Tasks - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae magni veniam dolore nam sapiente atque, velit neque esse facere
            </div>


          </div>
        </div>



        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full'>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify text-black"> Tasks - Lo
            </div>


          </div>
        </div>
        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full'>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify text-black"> Tasks - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae magni veniam dolore nam sapiente oluptatibus soluta voluptatum, fuga inventore eos, repellendus dicta voluptas? Magnam, eveniet aut.
            </div>


          </div>
        </div>

        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full'>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify text-black"> Tasks - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae magni veniam dolore nam sapiente oluptatibus soluta voluptatum, fuga inventore eos, repellendus dicta voluptas? Magnam, eveniet aut.
            </div>


          </div>
        </div>


        <div className='flex m-5 '>
          <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full'>


            <img src={circle} className="h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm" alt="" />

            <div className="text-justify text-black"> Tasks - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae magni veniam dolore nam sapiente oluptatibus soluta voluptatum, fuga inventore eos, repellendus dicta voluptas? Magnam, eveniet aut.
            </div>


          </div>
        </div>


      </div>
      {/* fotter to add tasks */}

      <div className='fixed w-full bottom-1 p-1'>
        <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full '>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter your Task here"
              className="w-full p-2 border rounded text-black font-mono"
            />
          </div>
          <button className="flex-none h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm">
            <img src={addButton} className="h-full w-full" alt="Add" />
          </button>
        </div>
      </div>



    </div >
  )
}