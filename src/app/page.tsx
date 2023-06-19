"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Home() {
  const [data, setData] = useState<Inputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    setData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <main className="container max-w-md mx-auto mt-20">
      <div>
        <h1 className="text-lg font-bold">React Hook Form Test</h1>
      </div>

      <div>
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="text-slate-800 rounded-md p-2"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="text-slate-800 rounded-md p-2"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="text-slate-800 rounded-md p-2"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="text-slate-800 rounded-md p-2"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <button
            className="rounded bg-white text-slate-800 mt-4 p-2 font-semibold hover:bg-slate-800 hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-col mt-4">
        <h1 className="text-center font-bold text-lg">Form Output</h1>

        <div>{data.firstName && <p>First Name: {data.firstName}</p>}</div>
        <div>{data.lastName && <p>Last Name: {data.lastName}</p>}</div>
        <div>{data.email && <p>Email: {data.email}</p>}</div>
        <div>{data.password && <p>Password: {data.password}</p>}</div>
      </div>
    </main>
  );
}
