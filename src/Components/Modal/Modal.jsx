import { useForm } from 'react-hook-form';

const Modal = ({user}) => {
  

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

        const name=data.name;
        const email=data.email;
        const phone=data.phone;
        const updateInfo={
            name,email,phone
        }
        console.log(updateInfo)
    }
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
                                <input type="text" name='name' defaultValue={user?.name}   placeholder="name" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text"  name='phone' defaultValue={user?.phone} placeholder="Phone Number" className="input input-bordered" />
                                
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