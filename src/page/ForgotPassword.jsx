import { useState } from "react"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";


export  function ForgotPassword() {
  const [email, setemail] = useState( " ")
  
  

  function onChange(e){
     setemail(e.target.value );

  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold" > Forgot Password </h1>
      <div className=" flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl m-auto " >
        <div className=" md:w=[67%] lg:w-[50%] mb-12 md:mb-6 " >
          <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' alt='key' className=" w-full rounded-2xl " />
        </div>
        <div className=" w-full md:w-[67%] lg:w-[40%] lg-ml-20 ml-8 " >
          <form>

          < input type='email' id="email" value={email} onChange = {onChange} placeholder= " Email address " className  = " w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6 " />

                   <div className=" flex justify-between whitespace-nowrap text-sm sm:text-lg my-5" >
            <p> Have a account? <Link to="/Sign-in" className=" text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-2 " > Sign In </Link></p>

            <p> <Link to="/sign-in"  className=" text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out  "> sign in instead </Link> </p>
          </div>
          <button className=" w-full bg-blue-600 text-white px-7 py-3 text-5m font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800  " type="submit" > Send reset password </button>
          <div className="my-4 items-center flex before:border before:flex-1 before:border-gray-300  after:border after:flex-1 after:border-gray-300 "  >
            <p className=" text-center font-semibold mx-4 "  >OR</p>
          </div>
          <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}
