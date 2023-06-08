import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import eipLogo from '../../assets/logo4.gif'


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError("")


    }

    return (
        <div className='h-[500px] flex justify-center items-center mt-4 mb-10'>
            <div className='w-96 p-7 shadow-2xl bg-[#1B3838] rounded-lg'>
                {/* <img className="w-20 h-20 absolute left-[585px] top-32" src={eipLogo} alt="" /> */}
                <h2 className='text-2xl text-center font-bold text-white mt-10 mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("name", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs mb-4" type="text" placeholder="Name" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("email", {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs mb-4" type="email" placeholder="Email" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 character long' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                        })} className="input input-bordered w-full max-w-xs" type="password" placeholder="Password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='bg-[#FF8548] w-full mt-4 py-2 rounded-lg' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
                <div>
                    <button className="bg-[#1D1D1D] text-white w-full mt-4 py-2 rounded-lg">Sign In with Google</button>
                </div>
                <p className='mt-2 text-white'>Already have an account?<Link to='/signIn' className='text-[#FF8548]'> Please Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignUp;