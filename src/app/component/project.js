import Image from "next/image";

export default function Project() {
    const projectJson = [
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwkE74IFov1wPEhg0_4kzFvwClfAKXYv_ZdmvvcYp3U8-Kl31kyFpnboigAXQUa67leA2aAzb_Lo52MruRs7AzgWhdSqGK1tCw_9TSBRDknslYoFREagWbzGKBB6JGihnpvLFVSAp90lg/s1600/2.bmp",
            "title": "Repair Ball Valve & control Valve Sumitomo Chemical Eng. g. (AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB0kM7JWgb0IqFly2zqS_EOAK8tjdKOd8_VmPBIejI1cEnsZ_MEMKlk7BwHZdbPAfjJy-q50DdtqdlJgcw_tHsMV5lcakuq-pGL_11U6GWvy1-r9Jeov7K7RHuSdTia-F9PWZ1lIFqivs/s1600/1.bmp",
            "title": "Life Setting Safety Boiler & In Situ Globe Valve PT. Pupuk Sriwijaya Overhaul, Repair & Re-Calibration Safety & Control Valve PT. Styrindo Mono Indonesia",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxrCa-EWftOrbcCXvwesdLzc2WZsFWKpi9g9nv1kUjPJx3JskUpAgXpwMktLPIFfEQ1vMGRPZpAqjRxeZB3Vpvotia5N7_2kvuNYpD4gj6fc7qdatVU4WL6s3A48lgFFoCOwCoEh9J9gg/s1600/3.bmp",
            "title": "Re-Popping Test & Repair Safety Valve Tri Polyta Indonesia Repairing & Calibration of Control Valve Takada – Duta Wasita Baja",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaabaIA6qgSBr9qcO-R4OMOtYYNx5uEXRpKqMb92Y5r99TfMa5Uii8fblfJjlnXvy2unIdTlLbA9kBBpiUmwKk1ZFxtWCQxCQIPXmq-ylSWfnBKIygVh0XQMyDSR78IhzHPv29ROmz_yk/s1600/20.bmp",
            "title": "In Situ Valve Repair Boiler PT. Petrokimia Gresik Repair Hand & Re-Setting safety Valve PT. Chandra Asri Petro",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNFINPMjlOZNMKHuhpOXAhGQttey_HHi9jGQcr2u54Fz1Da3VYqXSw-5tJAVbPjGkNxduDoz-BwAuLgbw5lSWQYxN2cDiM-BFz9zZN7asLS3NwO0Ugs8nDIhbV3QorwUHuMI3ShxjBH-k/s1600/21.bmp",
            "title": "Repair Safety Valve (Main Steam) PT. Indah Kiat",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR2K4TDAB8Q4-Cv6_GYs98V74IJwJDAPl70dUyflzhOurr24ncNU0TbfTqna9eYQWYyBHXlXlNzf32U1pM5XjpZvZhi2XEv-sHlhm8LhOfNXf0I6VUpFwpzuucO-4YzW8KS_joVLutIR0/s1600/23.bmp",
            "title": "On Site X – Mastree Online Repair OnSite X – Mastree Online Repair Maintenance & Service X - Masree BP (PARIGI) Offshore",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXWEbOzoAyKg29bS5413GQH9DFZ7A6JUxCHKpPVJJbJIconlhgd0rofuc_IBAlF7nUqtEBr3TFgMQzFhyphenhyphen7KAx59eGTt6Bkxjt6c6MQQ9KYkirfhzIgYhs_4FB7Ct3ZEN23g0Rog19HGeM/s1600/27.bmp",
            "title": "Online Leak Sealing Steam & Gas Process Cogen (Chevron) Duri,",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLlkCZGhhRdHpJ3wCXcdT_a7Nz1mLsipxwVmmVavkIbtddnEt4am_7p7SR8dWF-El46uhHUVOQg42m1hvHVoF4dsKea5BarXdzEnCPvrbeHeLrxFoywEfCSh36HIFlFEuiE7HBA6r3gJ8/s1600/23.bmp",
            "title": "Period Maintenance & Service Well Injector Duri Field (Chevron), Riau",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        },
        {
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg74rDcZjMlzZZniPa28MTbfDXleuUzIXpg_bwMARGrFLz5bYPPf_qL0EAajRP_VoWXGXogRSVlnFZD3JIKlkzFSmVJtmdcgK3bhyphenhyphen42yngiOZGDXXeFythgEZsfemlkfe685ihTSr6V_VE/s1600/21.bmp",
            "title": "Period Maintenance & Service X – Mastree Valve, PT. PERTAMINA EP REGION JAWA",
            "description": "AnyerRepair Globe, Gate, Plug, Butter Fly & Safety Valve PT. Pupuk Sriwijaya"
        }
    ];
    const gambar = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaabaIA6qgSBr9qcO-R4OMOtYYNx5uEXRpKqMb92Y5r99TfMa5Uii8fblfJjlnXvy2unIdTlLbA9kBBpiUmwKk1ZFxtWCQxCQIPXmq-ylSWfnBKIygVh0XQMyDSR78IhzHPv29ROmz_yk/s1600/20.bmp';
    return (
        // <div className="px-20">

        //     <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //         {/* <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWbByWWHL9atylH4e2osnI4Ly1ENm90Cq1hGCoM9BucsfDm01KgyHfPxllfCOJU-5xS2RAazeYELfWycrVWAW9ECTZJ4TTvS4Bl9JvSZ-1NEWg0IYeaQ0GkLLO1jgR9p8sRZ6CNEz2SIg/s1600/2.bmp" alt="" height={100} width={100}/> */}
        //         {/* <div className="bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWbByWWHL9atylH4e2osnI4Ly1ENm90Cq1hGCoM9BucsfDm01KgyHfPxllfCOJU-5xS2RAazeYELfWycrVWAW9ECTZJ4TTvS4Bl9JvSZ-1NEWg0IYeaQ0GkLLO1jgR9p8sRZ6CNEz2SIg/s1600/2.bmp')] bg-center bg-no-repeat w-full"></div> */}
        //     <div className="w-full h-96 bg-center bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFpam39CwUJCQu6iXs-E6PSXuErexX3vPJ1CFzmc8nJ8T_DYaKQGxIYQT34ShoyLigynsd8rWuMQmkR6-e56qorwI79P9e12YU2lKNUKwzdlAC9p4IsWtQG0E9t8DaDq_4orjXk0q0GS0/s1600/24.bmp')] bg-no-repeat"></div>

        //         <div className="flex flex-col justify-between p-4 leading-normal">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        //             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //         </div>
        //     </a>

        // </div>

        <div className="px-5 w-full flex flex-wrap justify-center" id="project">
            <h2 className="w-full text-center text-5xl my-5 text-white font-bold">PROJECT</h2>
            {projectJson.map((project, key) => (
                <div className="relative w-[29rem] m-3  bg-[#DC5F00] flex rounded" key={key}>
                    {/* <div className={`w-5/10 h-80 bg-cover bg-[url(' ${project.image} ')]`}></div> */}
                    <img className="w-full h-80 " src={project.image} width="auto" height="auto" />
                    <h1 className="absolute backdrop-blur-xs bottom-0 w-full left-0 min-h-20 text-lg font-semibold text-gray-900 dark:text-white bg-black p-2 opacity-75">{project.title}</h1>

                    {/* <div className="w-5/10 m-5 ">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{project.description}</p>
                    </div> */}
                </div>
            ))}


            {/* <div className="w-4/10 m-3 bg-[#DC5F00] flex rounded">
                <div className="w-4/5 h-80  bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB0kM7JWgb0IqFly2zqS_EOAK8tjdKOd8_VmPBIejI1cEnsZ_MEMKlk7BwHZdbPAfjJy-q50DdtqdlJgcw_tHsMV5lcakuq-pGL_11U6GWvy1-r9Jeov7K7RHuSdTia-F9PWZ1lIFqivs/s1600/1.bmp')] bg-no-repeat scale-90 "></div>
            </div>
            <div className="w-4/10 m-3 bg-[#DC5F00] flex rounded">
                <div className="w-4/5 h-80  bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZquZ63SSmJDtjoJ1n_rKAmKf5ikIX2BlAzM-0yvLwREt8FgmkT0lihQLHArSXYjSnTalDZ4TmKtfa9uDMgdwjL-VYsK5OSJhsiYN2jilI_IhtCEHxS37vD_munYxl1vyefIF7dbITZZ0/s1600/1.bmp')] bg-no-repeat scale-90 "></div>
            </div> */}
        </div>


    )
}