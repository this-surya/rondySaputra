
import { GiValve } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";

export default function Services() {
    return (
        <div className="flex flex-wrap justify-center bg-linear-to-r py-5 from-[#373A40] to-[#DC5F00]">
            <h2 className="text-5xl font-bold text-white w-full text-center mb-5 ">Service</h2>

            <div className=" bg-[#DC5F00] flex flex-col rounded mx-5 w-40 text-center items-center p-3">
                <GiValve className="text-[8rem]"/>
                <p className="font-bold text-white">Online Valve repair</p>
            </div>

            <div className=" bg-[#DC5F00] flex flex-col rounded mx-5 w-40 text-center items-center p-3">
                <FaTools className="text-[8rem]"/>
                <p className="font-bold text-white">Online safety valve Setting</p>
            </div>
            <div className=" bg-[#DC5F00] flex flex-col rounded mx-5 w-40 text-center items-center p-3">
                <FaHelmetSafety className="text-[8rem]"/>
                <p className="font-bold text-white">Online control valve calibration</p>
            </div>

        </div>

    )
}