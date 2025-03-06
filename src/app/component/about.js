import { FaRunning } from "react-icons/fa";

export default function About() {
    return (
        <div className="flex items-center flex-col md:flex-row" id="about">

            <div className="md:w-5/10 w-fit h-screen bg-center bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFpam39CwUJCQu6iXs-E6PSXuErexX3vPJ1CFzmc8nJ8T_DYaKQGxIYQT34ShoyLigynsd8rWuMQmkR6-e56qorwI79P9e12YU2lKNUKwzdlAC9p4IsWtQG0E9t8DaDq_4orjXk0q0GS0/s1600/24.bmp')] bg-no-repeat scale-190">
            </div>

            <div className="md:w-5/10 bg-[#373A40] text-white md:mx-5 mx-2 p-5 rounded">
                <h2 className="text-5xl font-bold text-[#DC5F00] flex">About Me</h2>

                <p className="mt-5">Job Profile
                    My skill and professional experiences in online valve maintenance, online valve repair,
                    online
                    leak sealing of steam, oil & gas. In addition, serving the supplies and services - services the
                    oil
                    and gas industry equipment in mining also, Power Plant, Petrochemical and General
                    industry.
                    I often do work in almost all areas of business. Among others in the company's oil and gas
                    mining, power plants and other industrial, and has completed the good work or supply
                    services
                    with very satisfactory results and mutual benefit.</p>

                <p className="mt-10">
                    Responsibility
                    I do concern for satisfactory service delivery processes which are always communicated,
                    monitored, measured, analyzed and reviewed by Top Management and related functions
                    and
                    all levels in the company to improve continuously in order to achieve the vision and goals of
                    the company
                </p>

                {/* <h2 className="text-5xl font-bold text-[#DC5F00] mt-10 flex"><FaRunning />Skills</h2>

                <p className="mt-5">My expertise is engaged in services - engineering services to various factories, oil refineries,
                    power generation and petrochemical. The scope of work of my skills in valve are:</p>

                    <ul>
                    <li>1. Online Valve repair,</li>
                    <li>2. Online safety valve Setting,</li>
                    <li>3. Online control valve calibration,</li>
                    <li>4. Periodic valve maintanance,</li>
                   <li> 5. Online leak Sealing,</li>
                    <li>6. Online Stuck valve,</li>
                   <li> 7. Gear Box Problem,</li>
                    <li>8. Air Blower repair</li>
                    </ul> */}


                <hr className="text-[#DC5F00] mt-5" />

            </div>

        </div>
    );
}