import circle from '../assets/circle-svgrepo-com.svg';
import done from "../assets/check-mark-circle-2-svgrepo-com.svg";
import bin from '../assets/bin-xmark-svgrepo-com.svg';

interface Display_task_interface {
    task: string;
    id: number;
    updateDone: (val: number) => void;
    done: boolean
    onDelete: (val: number) => void
}

export const Display_task: React.FC<Display_task_interface> = (props) => {



    return (
        <>



            <div className='flex m-5 '>
                <div title="Mark Task as Completed" className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full cursor-pointer' onClick={() => {
                    props.updateDone(props.id)
                }}>

                    {
                        props.done ?
                            <>
                                <img src={done} className="h-7 w-7 m-2  rounded-r-sm" alt="" />
                                <div className="text-justify line-through text-black">
                                    {props.task}
                                </div >

                            </>
                            :
                            <>
                                <img src={circle} className="h-7 w-7 m-2  rounded-r-sm" alt="" />
                                <div className="text-justify text-black">
                                    {props.task}
                                </div>
                            </>
                    }

                </div>


                <div title="Delete Task" className="cursor-pointer " onClick={() => {
                    props.onDelete(props.id)
                }}><img src={bin} className="h-5 mt-5 ml-1 w-5" alt="" /></div>

            </div>

        </>
    )
}