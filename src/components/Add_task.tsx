import { useState } from 'react';
import addButton from '../assets/circle-plus-svgrepo-com.svg';
interface Add_task_interface {
    pushData: (val: string) => void;
}

export const Add_task: React.FC<Add_task_interface> = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        props.pushData(inputValue);
        setInputValue('');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }


    return (
        <>
            <div className='fixed w-full bottom-1 p-1'>
                <form onSubmit={handleSubmit}>
                    <div title='Enter your task here' className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full '>
                        <div className="flex-1">
                            <input
                                required
                                type="text"
                                placeholder="Enter your Task here"
                                value={inputValue}
                                onChange={handleInputChange}
                                className="w-full p-2 border  text-black font-mono rounded-lg"
                            />
                        </div>
                        <button type="submit" className="flex-none h-7 w-7 m-2  rounded-r-sm">
                            <img src={addButton} className="h-full w-full" alt="Add" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}


