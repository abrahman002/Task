import React from 'react';
import { useForm } from "react-hook-form";


const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.name)
        
        const name=data.name;
        const email=data.email;
        const phone=data.phone;
        const userInfo={
            name,email,phone
        }
        console.log(userInfo)

    
        
    };



    console.log(watch("example")); // watch input value by passing the name of it

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
                                    <input type="text"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>! Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" {...register("phone", { required: true })} name='phone' placeholder="Phone Number" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>! Phone Number is required</span>}

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