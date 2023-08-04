import React from 'react'



export const Items = ({ tasks, handleDelete, changeStatus }) => {

    console.log(tasks);

    return (

        <div className='mx-auto col-10 col-md-8 col-lg-6'>

            <table className='table text-center'>

                <thead>

                    <tr>

                        <th>Change Status</th>

                        <th>Task</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        tasks.map((item, i) => ( // we have to pass i for access the index value and item is the object

                            <tr id={'item' + i} className={(item.status == 1) ? "bg-success" : "bg-warning"}>

                                <td id={'itemColumn' + i}>{(item.status == 1) ? "<span className='badge bg-success'>Completed</span>" : <input type='checkbox' onClick={() => changeStatus(i)} />}</td>

                                <td>{item.name}</td>

                                <td>

                                    <button onClick={() => handleDelete(i)}>Delete</button>

                                </td>

                            </tr>

                        ))

                    }



                </tbody>

            </table>

        </div>

    )

}

export default Items;