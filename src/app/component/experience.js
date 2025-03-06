
import ExperiencesJson from "./experience-json";
import TrainingJson from "./training-json";

import { FaRegLightbulb } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";

export default function Experiences() {


    console.log(ExperiencesJson);
    return (
        <div className="items-center bg-[#373A40] md:p-10">

            {/* <div className="w-5/10 h-screen bg-center bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmVJDxbJ5fauRvdBPHsFAQVRO0-8REKdI4-wgsFODlZLemhmwe85Yfm1jXXTEN8F6kI39TfOXVUgs7Gp7LzrJwuKlqLZ9VQeG-kb9JbHvTvOa7p1xRSQLOYN-idKrEkDTa_J83PQhYMDk1/s1600/Picture+099.jpg')] bg-no-repeat scale-x-190">
            </div> */}
            <h2 className="text-5xl font-bold text-[#DC5F00] w-full text-center mb-5">EXPERIENCES</h2>


            <div className="flex flex-col md:flex-row md:px-40 p-5">


                <div className="md:w-5/10 w-full">
                    <h2 className="text-5xl font-bold text-[#EEEEEE] flex mb-10"><FaRegLightbulb/>Profecional Career</h2>


                    <ol className="relative border-s border-gray-200 dark:border-black mx-auto">

                        {ExperiencesJson.map((experience, key) => (
                            <li className="mb-2 ms-4" key={key}>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.years}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
                            </li>
                        ))}

                    </ol>






                </div>

                <div className=" md:w-5/10">
                    <h2 className="text-5xl font-bold text-[#EEEEEE] flex mb-10 "> <FaRunning /> Training Of Expertise</h2>


                    <ol className="relative border-s border-gray-200 dark:border-black">

                        {TrainingJson.map((experience, key) => (
                            <li className="mb-2 ms-4" key={key}>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.years}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
                            </li>
                        ))}

                    </ol>






                </div>

            </div>

            <hr className="text-[#DC5F00] mt-5" />

        </div>
    );
}