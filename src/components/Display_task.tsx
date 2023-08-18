import display_interface from "../interface/display_interface"
import circle from '../assets/circle-svgrepo-com.svg';
import done from "../assets/check-mark-circle-2-svgrepo-com.svg";
import { useState } from "react";

export const Display_task: React.FC<display_interface> = (props) => {
    const [propData, setPropData] = useState(props);

    const mark_as_completed = (dataId: display_interface) => {
        setPropData({
            data: {
                taskId: propData.data.taskId,
                done: !propData.data.done,
                text: propData.data.text
            }
        });

        console.log(props);
    }

    return (
        <>
            <div className='flex m-5 '>
                <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full cursor-pointer' onClick={() => {
                    mark_as_completed(props)
                }}>

                    {
                        propData.data.done ?
                            <>
                                <img src={done} className="h-7 w-7 m-2  rounded-r-sm" alt="" />
                                <div className="text-justify line-through text-black">
                                    {propData.data.text}
                                </div>
                            </>
                            :
                            <>
                                <img src={circle} className="h-7 w-7 m-2  rounded-r-sm" alt="" />
                                <div className="text-justify text-black">
                                    {propData.data.text}
                                </div>
                            </>
                    }





                </div>

            </div>

        </>
    )
}