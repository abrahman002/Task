import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseUser from '../../Hook/UseUser/UseUser';
import { useEffect } from 'react';


const Modal = ({user}) => {
   const [refetch]=UseUser()
  

    const { register,reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

        const name=data.name;
        const email=data.email;
        const phone=data.phone;
        const updateInfo={
            name,email,phone
        }
        console.log(updateInfo)

        fetch(`http://localhost:5000/user/${user._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully item update',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }

            })
    }

    useEffect(()=>{
         if(user){
            reset(user)
         }
    },[user])
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })}    placeholder="name" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' {...register("email", { required: true })} placeholder="email"  className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text"  name='phone'  {...register("phone", { required: true })}  placeholder="Phone Number" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;