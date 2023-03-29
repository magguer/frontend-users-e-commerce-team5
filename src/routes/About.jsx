// Assets
import Banner from "../assets/img/bannerAbout.jpg";
import logo from "../assets/img/logoWhite.png";
import ottaPic from "../assets/img/otta.jpg";
import fede from "../assets/img/fede.jpg";
import magguerPic from "../assets/img/fotomagguer.png";
import nachoPic from "../assets/img/nachoPic.jpg";
// Components
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <div className="w-full">
      {/*       Project */}
      <div className="w-full">
        <div>
          <img src={Banner} className="h-[50vh] w-full object-cover" alt="" />
        </div>
        <div className="w-full tablet:h-[50vh] py-5 flex flex-col items-center bg-bgSecondaryColor  text-bgPrimaryColor">
          <h3 className="about-title text-center">ABOUT THE PROJECT</h3>
          <p className="text-center font-light px-10 max-w-[800px] m-auto text-md tablet:text-xl">
            Welcome to our "About" page, where we'll provide you with an insight
            into how we brought to life a website for a musical instrument
            store. Our team had the opportunity to work on a challenging yet
            exciting project, and we are thrilled to share with you the
            behind-the-scenes process of how we made it happen.
          </p>
          <img src={logo} className="w-52" alt="" />
        </div>
      </div>
      {/*       Members */}
      <div className="flex flex-col items-center gap-5 my-10">
        <h3 className="technologies-title">TEAM</h3>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10">
          <AboutCard
            linkedin={"magguer"}
            img={magguerPic}
            title={"Martin Telechea"}
            paragraph={
              "Full Stack Developer Jr. || ReactJs · NodeJs · TailwindCss"
            }
          />
          <AboutCard
            linkedin={"alan-torino"}
            img={ottaPic}
            title={"Alan Torino"}
            paragraph={
              "Full Stack Developer | JavaScript | React | Redux | NodeJs | Express"
            }
          />
          <AboutCard
            linkedin={"federico-díaz-morel-810a73202"}
            img={fede}
            title={"Federico Díaz"}
            paragraph={"Junior Developer & Contador Público"}
          />
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10">
          <AboutCard
            linkedin={"ignacio-vidal-856627236"}
            img={nachoPic}
            title={"Ignacio Vidal"}
            paragraph={
              "Full Stack Developer Jr | HTML | CSS | Java Script | Node.js | MySQL | MongoDB | React"
            }
          />
          <AboutCard
            linkedin={"juan-manuel-ottado"}
            img={ottaPic}
            title={"Juan M. Ottado"}
            paragraph={
              "Full Stack Developer & Web Designer | NodeJS | React | Adobe"
            }
          />
        </div>
      </div>
      {/*       Tecnologies */}
      <div className="w-full bg-bgSecondaryColor py-10 flex items-center justify-center flex-col text-bgPrimaryColor">
        <h3 className="technologies-title">TECHNOLOGIES</h3>
        <div className="grid grid-cols-1 mobilXS:grid-cols-2 tablet:grid-cols-4 gap-10 tablet:gap-24 mt-10">
          <div className="flex flex-col items-center">
            <img src="react.png" className="flex w-[70px]" alt="" />
            <h3 className="technologies-title">REACT</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="node.png" className="flex w-[70px]" alt="" />
            <h3 className="technologies-title">NODEJS</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="tailwind.png" className="flex w-[70px]" alt="" />
            <h3 className="technologies-title">TAILWIND</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="redux.png" className="flex w-[70px]" alt="" />
            <h3 className="technologies-title">REDUX</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
