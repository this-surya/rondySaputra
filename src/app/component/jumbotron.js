import Image from "next/image"
import { motion } from "motion/react"
export default function Jumbotron() {
    return (

        <section className="bg-linear-to-r from-[#373A40] to-[#DC5F00] flex flex-col min-h-screen justify-center md:flex-row " id="home">

            <div className="md:px-1 mx-auto w-full p-2 md:w-5/10 text-center lg:py-40">
            
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-20">Rondy Saputra often do work in almost all areas of business. Among others in the company's oil and gas mining, power plants and other industrial, and has completed the good work or supply services with very satisfactory results and mutual benefit</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="/rondy-CuriculumVitae.pdf" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#DC5F00] hover:bg-white hover:text-black focus:ring-4 focus:ring-[#DC5F00] dark:focus:ring-[#DC5F00]"  download>
                        Download CV
                    </a>
                    <a href="#contact" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Contact
                    </a>
                </div>
            </div>


            <div className="bg-center bg-no-repeat bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYXMIFiOH-Yy92bWDr2R6D8xe04ZSkr_2NPSFQmRaILVKRg4oh9ihi9ByocvmJMjf2x1HiZABmhmHFwnuxunKCjj9IlYdWZhmxk5q8GQT3MKzpwcM3_iJX_fPtrWyY6-YNJ8pukE2I_oc/s1600/4.bmp')] w-5/10 m-5 hidden md:block">
            </div>
        </section>

    )
}