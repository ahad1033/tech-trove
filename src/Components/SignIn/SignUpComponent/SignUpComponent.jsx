import { FcGoogle } from 'react-icons/fc'

const SignUpComponent = () => {
    return (
        <div className='w-full md:w-1/2 lg:w1/2 px-10 md:px-0 lg:px-0 my-5 md:my-0 lg:my-0'>
            <h2 className='text-xl font-semibold'>Sign up</h2>
            <div className="form-control w-full mt-10 ">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="enter your full name" className="input input-bordered w-full text-xs" />
            </div>
            <div className="form-control w-full mt-10 ">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="enter your email" className="input input-bordered w-full text-xs" />
            </div>
            <div className="form-control w-full my-7">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="enter your password" className="input input-bordered w-full text-xs" />
            </div>
            <a className="link text-xs text-blue-500">Forgot password?</a>
            <button className='button-secondary-wide mt-7'>Sign Up</button>
            <div className="flex items-center gap-4 my-5">
                <hr className="flex-1 border-t border-gray-300" />
                <span className="text-gray-500 text-sm">OR</span>
                <hr className="flex-1 border-t border-gray-300" />
            </div>
            <button className='button-secondary-wide' style={{ textTransform: 'none' }}><FcGoogle /> sign up by google</button>
        </div>
    );
};

export default SignUpComponent;