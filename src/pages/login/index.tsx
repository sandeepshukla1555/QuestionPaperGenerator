import Image from "next/image";
import React, { useState } from "react";
import loginHero from "../images/login-hero.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { ErrorTost } from "../utils/hooks";
import { LOGIN } from "../utils/data";
import { useRouter } from "next/router";

const Login = () => {
  const [HSPass, setHSPass] = useState<any>(false);
  const [showPassword, setShowPassword] = useState<any>(false);
  const [formStatus, setFormStatus] = useState<any>(false);
  const [emailData, setEmailData] = useState<any>("");
  const [passwordData, setPasswordData] = useState<any>("");
  const [auth, setAuth] = useState<any>('');
  const router = useRouter();

  const dedaError=(meg:any)=>{
    setAuth(meg)
    setFormStatus(true);
  }

  const mailFun = (e: any) => {
    const { name, value } = e.target;
    setEmailData({ value });
  };
  const hideShowIcon = (e: any) => {
    const { name, value } = e.target;
    value !== "" ? setHSPass(true) : setHSPass(false);
    setPasswordData({ value });
  };
  const submited = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailData.value !== '' && passwordData.value !== '') {
      console.log("Form submitted successfully:", emailData, passwordData);
      const validate = LOGIN?.filter((item) => {
        console.log(item);
      
        // Check if both email and password match
        if (item?.email === emailData.value && item?.password === passwordData.value) {
          return item?.token; // Include this item in the filtered result
        } else {
          return null; // Exclude this item
        }
      });
      console.log("validation of authentic user:", validate[0]?.token);
      validate[0]?.token!==undefined?router.push('/dashboard'):dedaError('Please enter correct email or password')
      
    } else {
      console.log("Please fill in all fields");
      dedaError("Please fill in all fields")
    }
  };
  console.log("================", auth)
  return (
    <div className="relative">
      {formStatus && (
        <ErrorTost
          setFormStatus={setFormStatus}
          message={auth}
        />
      )}
      <Image
        className="w-[calc(100%-50px)] mx-auto mt-5"
        alt="login-hero"
        src={loginHero}
      />
      <form className="px-12" onSubmit={submited}>
        <div className="border rounded-lg flex items-center gap-2 mb-4 overflow-hidden pl-2">
          <MdOutlineEmail className="text-2xl" />
          <input
            className="flex-grow py-3 block rounded-lg"
            type="text"
            placeholder="Enter email:"
            onChange={(e) => mailFun(e)}
          />
        </div>
        <div className="border rounded-lg flex items-center gap-2 overflow-hidden pl-2 mb-7 relative">
          <MdLockOutline className="text-2xl" />
          <input
            type={showPassword ? "text" : "password"}
            className="flex-grow py-3 block rounded-lg"
            placeholder="Enter password:"
            onChange={(e) => hideShowIcon(e)}
          />
          {HSPass && (
            <IoMdEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-2xl right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:opacity-85"
            />
          )}
        </div>
        <div className="flex justify-center">
          <button className="py-2 px-5 rounded-lg bg-brand text-white text-xl font-medium flex items-center hover:opacity-85 gap-2">
            Login <MdLogin className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
