import { useState, useEffect } from "react";
import logo from '../assets/Black___White_Minimalist_Business_Logo-removebg-preview.png';
import clock from '../assets/alarm-clock-deadline-svgrepo-com.svg';
import calender from '../assets/calendar-general-month-2-svgrepo-com.svg';
export const Header_top: React.FC = () => {
    const [today, setToday] = useState(new Date());


    useEffect(() => {

        setInterval(() => {
            setToday(new Date())
        }, 30000);
    }, [])

    return (
        <>
            <div className='flex justify-center'>
                <img src={logo} className='w-15 h-20 center' alt="" />
            </div>
            <div className='flex justify-center text-black m-2'>

                <img src={calender} className="h-7 w-7 m-2" alt="" />
                <span className='text-black ml-2 font-mono font-bold m-2'>{today.toLocaleDateString()}</span>
                <img src={clock} className="h-7 w-7 m-2" alt="" />
                <span className='text-black ml-2 font-mono font-bold m-2'>
                    {today.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}</span>


            </div>
        </>
    )
}