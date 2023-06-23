import React, { useEffect, useState } from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import UseUser from '../../Hook/UseUser/UseUser';

const Table = () => {
    // const [users, setUsers] = useState([]);
    const [updateUser,setUpdateUser]=useState();
    const [refetch,users]=UseUser()


    // useEffect(() => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setUsers(data);
    //         });
    // }, []);



    return (
        <div className="p-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>

                                    {/* The button to open modal */}
                                    <label htmlFor="my_modal_6" className="btn" onClick={()=>setUpdateUser(user)} ><FaUpload/></label>
                                    <Modal
                                    user={updateUser}
                                    ></Modal>
                                </td>
                                <td>
                                    <button className="btn btn-warning text-xl text-white">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
