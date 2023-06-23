import React, { useEffect, useState } from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import UseUser from '../../Hook/UseUser/UseUser';
import Swal from 'sweetalert2';

const Table = () => {
    const [updateUser, setUpdateUser] = useState();
    const [refetch, users] = UseUser()


    const handleDelete = (id) => {
        const procced = confirm('are you sure delete this item');
        if (procced) {
            fetch(`https://task-server-pied-gamma.vercel.app/user/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully item delete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        const rimaining = users.filter(bookmark => bookmark._id !== id);
                        setUpdateUser(rimaining);
                    }
                })
        }
    }


    return (
        <div className="lg:p-20">
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
                                    <label htmlFor="my_modal_6" className="btn" onClick={() => setUpdateUser(user)} ><FaUpload /></label>
                                    <Modal
                                        user={updateUser}
                                    ></Modal>
                                </td>
                                <td>
                                <button className='btn btn-warning' onClick={()=>handleDelete(user._id)}><FaTrash/></button>
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
