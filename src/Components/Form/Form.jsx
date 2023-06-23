import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import UseUser from '../../Hook/UseUser/UseUser';

const Form = () => {
    const [refetch,users]=UseUser()
    console.log(users)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const userInfo = {
            name, email, phone
        };

        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch(),
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Submitted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    
                }
            });
    };

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4917.jpg?w=740&t=st=1687426911~exp=1687427511~hmac=705aac562ff1aef616ad09cda6df464266455f86744a8e86ca40f250717d57fa" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>! Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>! Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" {...register("phone", { required: true })} name='phone' placeholder="Phone Number" className="input input-bordered" />
                                    {errors.phone && <span className='text-red-600'>! Phone Number is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
