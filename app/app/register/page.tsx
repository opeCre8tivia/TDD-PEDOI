"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo"; // Adjust the import path if needed
import Link from "next/link";
import { registerUser } from "./actions";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";
import { useRouter } from "next/navigation";


interface FormData {
   firstName:string
   lastName:string
   email:string
   mobileNumber:string
   password:string
}

const Page = () => {
    
  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [error,setError]= useState<string | null>(null)
  


 const handleRegister = async (data:FormData) => {
 
  setLoading(true);
  const result = await registerUser(data);
  if (result.error) {
    setLoading(false);
    setError(result.error)
    return;
  }
  if (result.ok) {
    router.replace("/app/login")
  }
  setLoading(false);
};


  const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10,15}$/, "Mobile number must be 10-15 digits"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white md:bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg md:shadow-md p-8 flex flex-col items-center">
        <Logo styles={{width:"90%",height:"90%"}} />
        <h1 className="text-2xl font-bold mb-2 text-center">Pedoi</h1>
        <p className="mb-6 text-gray-500 text-center">Get your free account now</p>


           <Formik
             onSubmit={(values,actions)=>{
                 handleRegister(values)
                 actions.resetForm()
             }}
             initialValues={{
               firstName:"",
               lastName:"",
               mobileNumber:"",
               email:"",
               password:""
             }}

             validationSchema={validationSchema}
           >
            {({values,handleChange,errors,touched,handleSubmit})=>(

                <div className="w-full h-auto flex flex-col justify-start items-center gap-4">
            { error && <ErrorAlert
               message={error ? error : ""}
               onClose={()=> setError(null)}

              />}
                    
           <div className="w-full">
            <Input
              id="firstName"
              type="firstName"
              placeholder="Enter First Name"
              value={values.firstName}
              onChange={handleChange("firstName")}
            />
            {touched.firstName && errors.firstName && (
           <div className="text-red-500 text-xs mt-1">{errors.firstName}</div>
           )}
          </div>
           <div className="w-full">
            <Input
              id="lastName"
              type="lastName"
              placeholder="Enter Last Name"
              value={values.lastName}
              onChange={handleChange("lastName")}
            />

            {touched.lastName && errors.lastName && (
           <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>
            )}
          </div>
           <div className="w-full">
            <Input
              id="mobileNumber"
              type="mobileNumber"
              placeholder="Enter Mobile Number"
              value={values.mobileNumber}
              onChange={handleChange("mobileNumber")}
            />

             {touched.mobileNumber && errors.mobileNumber && (
              <div className="text-red-500 text-xs mt-1">{errors.mobileNumber}</div>
             )}
          </div>
          <div className="w-full">
            <Input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange("email")}
              
            />

            {touched.email && errors.email && (
             <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>
          <div className="w-full">
            <Input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange("password")}

              
            />

            {touched.password && errors.password && (
             <div className="text-red-500 text-xs mt-1">{errors.password}</div>
            )}
          </div>
                <Button 
                type="submit" 
                className="w-full mt-2"
                loading={loading}
                onClick={()=>handleSubmit()}
                >
                    Register
                </Button>
          </div>
            )}
           </Formik>
        

        <Link href={"/app/login"}>
          <div 
        className="text-gray-600 font-medium text-[14px] text-right mt-4">
            Have account already ? <span className="text-primary font-semibold">LOGIN</span>
        </div>
        </Link>
        </div>
   
    </main>
  );
};

export default Page;