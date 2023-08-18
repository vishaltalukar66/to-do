import { useState } from 'react';
import addButton from '../assets/circle-plus-svgrepo-com.svg';

export const Add_task: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("testing");
        console.log(inputValue);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }


    return (
        <>
            <div className='fixed w-full bottom-1 p-1'>
                <form onSubmit={handleSubmit}>
                    <div className='border-4 border-indigo-600 flex p-2 rounded-2xl shadow-lg shadow-indigo-800 w-full '>
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
                        <button type="submit" className="flex-none h-7 w-7 m-2 hover:bg-indigo-600 rounded-r-sm">
                            <img src={addButton} className="h-full w-full" alt="Add" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}