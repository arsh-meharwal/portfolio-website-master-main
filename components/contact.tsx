"use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

// export default function Contact() {
//   const { ref } = useSectionInView("Contact");

//   return (
//     <motion.section
//       id="contact"
//       ref={ref}
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>Contact me</SectionHeading>

//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:example@gmail.com">
//           example@gmail.com
//         </a>{" "}
//         or through this form.
//       </p>

//       <form
//         className="mt-10 flex flex-col dark:text-black"
//         action={async (formData) => {
//           const { data, error } = await sendEmail(formData);

//           if (error) {
//             toast.error(error);
//             return;
//           }

//           toast.success("Email sent successfully!");
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <textarea
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="message"
//           placeholder="Your message"
//           required
//           maxLength={5000}
//         />
//         <SubmitBtn />
//       </form>
//     </motion.section>
//   );
// }


import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";



interface FormData {
  botcheck: boolean;
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const apiKey = `${process.env.API}`;

  const { submit: onSubmit } = useWeb3Forms<FormData>({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
        <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
    <div ref={ref}>
      {/* <div className="text-2 text-5xl pb-8 mt-0" style={{ color: "orange" }}>
        Contact Me
      </div> */}
      <SectionHeading>Contact me</SectionHeading>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)} className="pb-12">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Your Email"
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Your Message"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
        {isSubmitSuccessful && isSuccess && (
          <div className="mt-1 text-sm text-center text-green-500">
            {message || "Success. Message sent successfully"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-1 text-sm text-center text-red-500">
            {message || "Something went wrong. Please try later."}
          </div>
        )}
      </form>
    </div>
    </motion.section>
  );
}