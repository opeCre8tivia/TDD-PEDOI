"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo"; // Adjust the import path if needed
import loginAdmin from "./action";
import { useRouter } from "next/navigation";
import * as Yup from "yup"
import { Formik } from "formik";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

const Page = () => {

  const router = useRouter()

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  

  const handleLoginAdmin = async ({email,password}:{email:string,password:string}) => {

  setError("");
  setLoading(true);
  try {
    const res = await loginAdmin({
      email:email,
      password:password
    })
   
    if (res?.error) {
      setError(res.error);
      setLoading(false);
      return;
    }
    if (res?.ok) {
      router.replace("/admin/dashboard");
    }
  } catch (err) {
    setError("An unexpected error occurred.");
    setLoading(false);
  }
  setLoading(false);
};


  const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <Logo styles={{width:"80px",height:"70px"}} />
        <h1 className="text-2xl font-bold mb-2 text-center">Pedoi Admin</h1>
        {/* <p className="mb-6 text-gray-500 text-center">Enter your credentials to access the admin panel.</p> */}
        
          <Formik
             onSubmit={(values,actions)=>{
                 handleLoginAdmin(values)
                 actions.resetForm()
             }}
             initialValues={{
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
                    Login
                </Button>
          </div>
            )}
           </Formik>
        
        </div>
   
    </main>
  );
};

export default Page;