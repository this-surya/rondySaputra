
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact(){
    return(
        <div className="h-screen bg-[#373A40] md:m-5 flex flex-col md:flex-row my-5" id="contact">
            <div className="md:w-5/10 flex justify-center items-center order-last md:order-first">
                <div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex py-5 items-center"><FaPhoneAlt className="mr-3 text-[3rem]"/> Contact Person <br /> +62 812 2215 4841</h3>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex py-5 items-center"><MdEmail className="mr-3 text-[3rem]"/> Email <br/> rondymoya@gmail.com</h3>

                
                    
                </div>
            </div>
            <div className="md:w-4xl bg-[#DC5F00]  flex flex-col justify-center">
            <h2 className="w-full text-center text-5xl my-5 text-white font-bold ">Contact </h2>

                <form className="md:w-3xl w-full mx-auto p-5">
                    <input type="text" id="default-input" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." />
                    <input type="text" id="default-input" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5" placeholder="@Email..." />
                    <textarea id="default-input" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5" rows={8} placeholder="Message..." />
                    <button className="hover:ring-2 py-2 mt-5 rounded-lg w-full bg-[#373A40] hover:cursor-pointer text-white">Send</button>
                </form>
            </div>
        </div>
    )
}