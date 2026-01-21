import { useForm } from "react-hook-form";

let Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // yahan aap API / EmailJS laga sakte ho
    reset();
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg mt-5 bg-white">
      
      {/* HEADING */}
      <h1 className="text-2xl font-semibold mb-2">Contact Details</h1>
      <p className="text-gray-600 mb-6">
        Feel free to reach out if you have any questions or feedback.
      </p>

      {/* CONTACT DETAILS */}
      <div className="mb-6 text-sm text-gray-700">
        <p><strong>Email:</strong> skilltracker@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 76510</p>
        <p><strong>Location:</strong> India</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email Address</label>
          <input
            type="email"
            className="w-full border rounded-md p-2"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

  

        {/* Message */}
        <div>
          <label className="block mb-1">Your Message</label>
          <textarea
            className="w-full border rounded-md p-2 h-32"
            placeholder="Write your message here..."
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Contact;
