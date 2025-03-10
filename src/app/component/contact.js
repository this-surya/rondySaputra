
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";


export default function Contact(){  

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxXQzp1qwThRbUoWlbXL32_4a5FYrxr0AyX-51wpXBi7fhuTkGqVrZA0qzuEs5krlW8/exec";
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    
    try {
      const response = await fetch(scriptURL, { method: "POST", mode: "no-cors", body: formDataToSend });
      if (response.ok) {
        setMessage("Data berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage("Gagal mengirim pesan.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan, coba lagi nanti." + error);
    }
    
    setLoading(false);
  };

    return(
        <div className="h-screen bg-[#373A40] md:m-5 flex flex-col md:flex-row my-5" id="contact">
            <div className="md:w-5/10 flex justify-center items-center order-last md:order-first">
                <div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex py-5 items-center"><FaPhoneAlt className="mr-3 text-[3rem]"/> Contact Person <br /> +62 812 2215 4841</h3>
                <hr className="text-[#DC5F00] mt-5" />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex py-5 items-center"><MdEmail className="mr-3 text-[3rem]"/> Email <br/> rondymoya@gmail.com</h3>
                <hr className="text-[#DC5F00] mt-5" />


                
                    
                </div>
            </div>
            <div className="md:w-4xl bg-[#DC5F00]  flex flex-col justify-center">
            <h2 className="w-full text-center text-5xl my-5 text-white font-bold ">Contact </h2>
            
            {message && <p className="text-center text-sm mt-2">{message}</p>}
                <form className="md:w-3xl w-full mx-auto p-5" onSubmit={handleSubmit}>
                    <input type="text" value={formData.name} onChange={handleChange} name="name" id="default-input" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." />
                    <input type="email" value={formData.email} onChange={handleChange} name="email" id="default-input" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5" placeholder="@Email..." />
                    <textarea onChange={handleChange} value={formData.message} name="message" id="default-input" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5" rows={8} placeholder="Message..." />
                    <button className="hover:ring-2 py-2 mt-5 rounded-lg w-full bg-[#373A40] hover:cursor-pointer text-white" type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</button>
                </form>
            </div>
        </div>
    )
}