

import React, { useState } from 'react'

import {Items} from './Items';

 

export const Todo = () => {

 

    const [tasks, setTasks] = useState([]);

    const [inputs, setInputs] = useState({

    name:"",

    status:0

    });

 

    const handleSubmit = (e) => {  // for submit the form values

        e.preventDefault();

        setTasks([...tasks, inputs]);

        setInputs({

            name: "",

            status:0,

        });

    }

 

    const handleChange = (e) => {

        setInputs({

            ...inputs,[e.target.name]: e.target.value,

        });

      };

 

    const handleDelete = (index) => {

        const filterData = tasks.filter((item, i) => i !== index)

        setTasks(filterData);

    }

 

    const changeStatus = (index) =>{

        tasks.map((item, i) => (

            (i == index) ? item.status = 1 : ""

        ));

        document.getElementById("itemColumn"+index).innerHTML = "<span style='background-color: #04a943;padding: 6px;color: #fff;border-radius: 10px;font-size: 12px;'>Completed</span>";

        document.getElementById("item"+index).style.backgroundColor = "#000";

    }

 

    return (

        <div className='container-fluid'>

            <h1 className='text-center'>Todo List</h1>

            <div>

                <form onSubmit={handleSubmit} className='mx-auto col-10 col-md-8 col-lg-6'>

                    <div>

                        <label>Task</label>

                        <input type='text' className='form-control' placeholder='Enter Todo Task' name="name" value={inputs.name} onChange={handleChange} />

                        <input type='hidden' name="status" value={0} onChange={handleChange} />

                    </div>

                    <button type='submit' className="btn btn-success col-md-2 mt-2">Add Task</button>

                </form>

                <Items tasks={tasks} handleDelete={handleDelete} changeStatus={changeStatus}/>

            </div>

        </div>

    );

}

export default Todo;
