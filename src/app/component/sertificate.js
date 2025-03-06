
import { BsCardChecklist } from "react-icons/bs";
export default function Sertificate() {
    
    return (
        <div className="min-h-screen flex justify-between items-center  my-5 flex-col md:flex-row md:bg-transparent bg-[#373A40]" id="achievement">


            {/* {achievementJson.map((achievement) => (
                
            ))} */}

            <div className="relative flex-wrap md:h-screen w-5/10 flex-row justify-center flex items-center">
                {/* <span className="absolute top-2 right-2 text-3xl"></span>
                <p className="text-lg font-semibold text-gray-900 dark:text-white"></p>
                <span className="absolute bottom-2 right-2 text-base font-normal text-gray-500 dark:text-gray-400"></span> */}
                <img className="md:w-40 m-2" src="./SERTIFIKAT/1.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/2.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/3.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/4.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/5.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/6.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/7.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/8.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/9.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/10.png" width="auto" height="auto" />
                <img className="md:w-40 m-2" src="./SERTIFIKAT/11.png" width="auto" height="auto" />

            </div>

            <div className="bg-[#373A40] w-full md:w-5/10 md:h-screen py-10 items-center flex justify-center flex-col text-5xl font-bold text-[#DC5F00]  text-center md:order-last order-first">

                <h2 className=" mb-5">SERTIFICATE</h2>
                <span className="md:text-[15rem] text-[5rem]"><BsCardChecklist/></span>

            </div>
        </div>


    )
}