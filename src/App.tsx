
import { Header_top } from "./components/Header_top";
import { Display_task } from "./components/Display_task";
import { Add_task } from "./components/Add_task";
import { useEffect, useState } from "react";
import { stringToArray } from "./utilities/stringToArray";



export default function App() {


  const [toDoData, setToDoData] = useState<string[]>([]);
  const [selectedToDoData, setSelectedToDoData] = useState<string[]>([]);

  function deleteTask(index: number) {
    const dataToChange0 = toDoData[index];

    const dataFromLocalStorageArray0 = stringToArray((localStorage.getItem("to-do")) as string);
    const dataFromLocalStorageArray1 = stringToArray((localStorage.getItem("to-do-selected")) as string);

    const newArray0 = dataFromLocalStorageArray0.filter(item => item !== dataToChange0);
    const newArray1 = dataFromLocalStorageArray1.filter(item => item !== dataToChange0);

    localStorage.setItem("to-do", newArray0.toString());
    localStorage.setItem("to-do-selected", newArray1.toString());
    updateState();
  }
  function changeTaskEvent(index: number) {
    if (!selectedToDoData.includes(toDoData[index])) {
      //insert into selected
      const dataToChange = toDoData[index];
      const dataFromLocalStorage = localStorage.getItem("to-do-selected") as string;
      const dataFromLocalStorageArray = stringToArray(dataFromLocalStorage);
      dataFromLocalStorageArray.unshift(dataToChange);
      localStorage.setItem("to-do-selected", dataFromLocalStorageArray.toString());
      updateState();
    }
    else {
      const dataToChange = toDoData[index];
      const dataFromLocalStorage = localStorage.getItem("to-do-selected") as string;
      const dataFromLocalStorageArray = stringToArray(dataFromLocalStorage);
      const newArray = dataFromLocalStorageArray.filter(item => item !== dataToChange);
      localStorage.setItem("to-do-selected", newArray.toString());
      updateState();

    }
  }

  function addNewTask(val: string) {
    const dataFromLocalStorage = localStorage.getItem("to-do") as string;

    if (!dataFromLocalStorage) {
      //first time user 
      const dataFromLocalStorageArray = [val];
      localStorage.setItem("to-do", dataFromLocalStorageArray.toString());
      localStorage.setItem("to-do-selected", [].toString());

    }
    else {
      const dataFromLocalStorageArray = stringToArray(dataFromLocalStorage);
      dataFromLocalStorageArray.unshift(val);
      localStorage.setItem("to-do", dataFromLocalStorageArray.toString());

    }

    updateState();
  }

  function updateState() {
    const dataFromLocalStorage = localStorage.getItem("to-do") as string;
    const selectedDataFromLocalStorage = localStorage.getItem("to-do-selected") as string;

    const dataFromLocalStorageArray = stringToArray(dataFromLocalStorage);
    const selectedDataFromLocalStorageArray = stringToArray(selectedDataFromLocalStorage);

    setToDoData(dataFromLocalStorageArray);
    setSelectedToDoData(selectedDataFromLocalStorageArray)





  }


  useEffect(() => {
    updateState();
  }, [])
  return (
    <div className="h-screen w-full bg-slate-100">
      <Header_top />
      {/* header ends here */}


      {/* body to display taks */}
      <div className=" h-2/3 overflow-y-scroll mb-10 w-full">
        {/* Call display components */}

        {
          toDoData.map((element, key) => <Display_task task={element} id={key} updateDone={changeTaskEvent} done={(selectedToDoData.includes(element))} onDelete={deleteTask} />)
        }

      </div>

      {/* fotter to add tasks */}

      <Add_task pushData={addNewTask} />



    </div >

  )
}