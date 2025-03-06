import { GiAchievement } from "react-icons/gi";
import { IoIosCheckboxOutline } from "react-icons/io";


const achievementJson = [
    {
        "time": "25th July 2006",
        "description": "OAKWELL INDUSTRIES SDN BHD Supporting Letter Specialized for Repair and Maintenance all Kind Valve"
    },
    {
        "time": "September 2006",
        "description": "PT. PERTAMINA EP-REGION JAWA Penghargaan atas Keberhasilan Kerja di Area (PCT/SINDANG/BONGAS/TGB/TERMINAL)"
    },
    {
        "time": "22nd March 2008",
        "description": "CHEVRON INDO ASIA BUSSINESS UNIT (PT. CPI) Succesfully Handling Chevron Work of Injector Well Valve at Chevron (Riau)"
    }
]

export default function Achievement() {
    return (
        <div className="min-h-screen bg-[#373A40] md:p-5 flex justify-center items-center  flex-col md:flex-row py-3" id="achievement">
            <div className="w-5/10 md:text-5xl text-xl font-bold text-[#DC5F00]  text-center">

                <h2 className=" mb-5">ACHIEVEMENT</h2>
                <GiAchievement className="md:text-[20rem] text-[10rem] mx-auto" />

            </div>

            {achievementJson.map((achievement, key) => (
                <div className="relative md:w-96 w-full md:mx-5 p-3 my-3 h-96 bg-[#DC5F00] md:p-5 shadow-lg rounded-lg shadow-white flex items-center" key={key}>
                    <span className="absolute top-2 right-2 text-3xl"><IoIosCheckboxOutline/></span>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.description}</p>
                    <span className="absolute bottom-2 right-2 text-base font-normal text-gray-500 dark:text-gray-400">{achievement.time}</span>
                </div>
            ))}

        </div>


    )
}