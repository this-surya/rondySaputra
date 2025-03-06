import Image from "next/image";
import Nav from "./component/nav";
import Jumbotron from "./component/jumbotron";
import Footer from "./component/footer";
import About from "./component/about";
import Experiences from "./component/experience";
import Service from "./component/sercive";
import Project from "./component/project";
import Achievement from "./component/achievement";
import Sertificatet from "./component/sertificate";
import Sertificate from "./component/sertificate";
import Contact from "./component/contact";






export default function Home() {
  return (
    <>

      <Nav />
      <Jumbotron />
      {/* <Service/> */}
      <About/>
      <Experiences/>
      <Project/>
      <Achievement/>
      <Sertificate/>
      <Contact/>
      <Footer />

    </>

  );
}
