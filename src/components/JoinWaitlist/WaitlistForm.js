"use client";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      email: data.email,
    };
    const joinWaitlist = async () => {
      toast.loading("Adding to waitlist...");
      try {
        const response = await fetch(
          "https://back-end-zfku.onrender.com/api/v1/waitlist/upload",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        // const responseData = await response.json();
        // console.log(responseData, response);

        // Handle success response
        if (response.ok) {
          toast.dismiss();
          toast.success(
            "Thank you for joining the Liizor waitlist. Please, check your email for a confirmation message"
          );
        }

        // Handle when user is already on the waitlist
        if (response.status === 409) {
          toast.dismiss();
          toast.error(
            "You're already on the Liizor waitlist, share the excitement with friends"
          );
        }
      } catch (error) {
        toast.dismiss();
        toast.error(
          "Something went wrong. Check internet connection and try again"
        );
        console.error("Error:", error);
      }
    };
    joinWaitlist();
  };

  return (
    <div className="relative flex flex-col gap-3 md:bottom-5">
      <Toaster position="top-right" />
      <p>
        Welcome to Liizor, the next-generation crypto trading platform designed
        for security, inclusivity, and ease of use. Join our waitlist today and
        get exclusive early access to cutting-edge features and the chance to
        shape the future of crypto trading.
      </p>
      <form className="flex flex-col gap-1">
        {[
          {
            placeholder: "Enter your name",
            type: "text",
            name: "name",
            validation: {
              required: {
                value: true,
                message: "This input field is required",
              },
            },
          },
          {
            placeholder: "Enter your email address",
            type: "email",
            name: "email",
            validation: {
              required: {
                value: true,
                message: "This input field is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            },
          },
        ].map((input) => (
          <div key={input.name}>
            <input
              className="border-2 border-[#21212166] rounded-xl w-full p-3 "
              type={input.type}
              placeholder={input.placeholder}
              {...register(input.name, input.validation)}
            />
            <br />
            {
              <span
                className={`text-red-500 ${!errors[input.name] && "opacity-0"}`}
              >
                {errors[input.name] ? errors[input.name].message : "won't show"}
              </span>
            }
          </div>
        ))}
        <button
          onClick={handleSubmit(onSubmit)}
          className="text-2xl font-extrabold text-white bg-[#004EEB] rounded-[10px] p-4"
        >
          Join the Waitlist
        </button>
      </form>
    </div>
  );
}
