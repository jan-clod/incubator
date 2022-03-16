import React, { useState } from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks1,setTasks1] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    const removeTask = (newId : number) => {
        let filtered = tasks1.filter(el=> el.id !== newId)
        setTasks1(filtered)
    } 

    

    let [valueButton, setValueButton] = useState('All')

    const taskFilter = (filterValue: string) => {
        setValueButton(filterValue)
    }

    let prokladka = tasks1

    if (valueButton === "Activ") {
        prokladka = tasks1.filter(el=>el.isDone===false)
    }

    if (valueButton === "Completed") {
        prokladka = tasks1.filter(el=>el.isDone===true)
    }



    return (
        <div className="App">
            <Todolist 
            title={'What to learn'} 
            tasks={prokladka}
            removeTask={removeTask}
            taskFilter={taskFilter} />
        </div>
    );
}

export default App;
