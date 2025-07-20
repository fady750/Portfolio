import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";

const works = [
    {
        imgSrc: '/images/project-1.png',
        title: 'Coffee Shop Menu',
        tags: ['GSAP', 'React JS', "Web-design"],
        projectLink: 'https://coffeeshopmenuu.netlify.app/'
    },
    {
        imgSrc: '/images/Project-3.png',
        title: 'World Wise',
        tags: ['Development', 'API', 'SPA'],
        projectLink: 'https://github.com/fady750/worldwise.git'
    },
    {
        imgSrc: '/images/Project-4.png',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/fady750/aqarak.git'
    },
    {
        imgSrc: '/images/Project-5.png',
        title: 'Fast Pizza React',
        tags: ['API', 'Development'],
        projectLink: 'https://github.com/fady750/fast-pizza-react.git'
    },
    {
        imgSrc: '/images/Project-6.png',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
        imgSrc: '/images/Project-2.png',
        title: 'Stop Watch',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/fady750/stopwatch',
    }
];

function Work() {
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#heading",
                pin:true,
                scrub:true,
                start:"top top-100px",
            }
        })
        tl.from("h1", {
            opacity:0,
        })
        const ptl1 = gsap.timeline({
            scrollTrigger:{
                trigger:"#projectOne",
                pin:true,
                scrub:true,
                start:"top center-100px",
            }
        })
        ptl1.from("#projectOne > div", {
            opacity:0,
            duration:1,
            stagger:0.09,
            ease:"power1.inOut",
        })
        const ptl2 = gsap.timeline({
            scrollTrigger:{
                trigger:"#projectTwo",
                pin:true,
                scrub:true,
                start:"top center-100px",
            }
        })
        ptl2.from("#projectTwo > div", {
            opacity:0,
            duration:1,
            stagger:0.09,
            ease:"power1.inOut",
        })

    }, [])
    
    return (
        <section className="section" id="work" >
            <div className="container" >
                <div className="w-full mb-[50px] md:mb-[170px] " id="ourBiggestProjectsContainer">
                    <div id="heading" className="h-[75vh] flex items-center text-center" >
                        <h1 className=" text-4xl md:text-6xl lg:text-8xl  w-full wrap-break-word" >Our Biggest Projects</h1>
                    </div>
                    <div id="projectOne" className="xl:h-screen h-full w-full grid grid-cols-1 xl:grid-cols-12 gap-9 md:gap-[50px] grid-rows-2">
                        <div className=" max-xl:h-72 xl:col-start-1  xl:col-end-5 xl:row-start-1 xl:row-end-2" >
                            <img className="h-full w-full" loading="lazy" src="/public/projectone/img1.png" />
                        </div>
                        <div className="max-xl:h-72 xl:-col-end-1 xl:col-span-4" >
                            <img className="h-full w-full" loading="lazy" src="/public/projectone/img2.png"/>
                        </div>
                        <div className="max-xl:h-72 xl:row-start-2 xl:col-start-1 xl:col-end-5" >
                            <img className="h-full w-full" loading="lazy" src="/public/projectone/img4.png"/>
                        </div>
                        <div className="max-xl:h-72 xl:row-start-2 xl:col-span-4 xl:-col-end-1" >
                            <img className="h-full w-full" loading="lazy" src="/public/projectone/img5.png"/>
                        </div>
                        <div className="max-xl:h-72 xl:col-start-5 xl:col-end-9 xl:row-start-1 xl:row-span-2">
                            <img className="h-full w-full" loading="lazy" src="/public/projectone/img3.png"/>
                        </div>
                    </div>
                    <div id="projectTwo" className=" my-[30px] md:my-[60px] xl:h-screen h-full w-full grid grid-cols-1 xl:grid-cols-12 gap-9 md:gap-[50px] grid-rows-2">
                        <div className=" max-xl:h-72 xl:col-start-1  xl:col-end-8 xl:row-start-1 xl:row-end-2" >
                            <img className="h-full w-full" loading="lazy" src="/public/projectTwo/img1.png "/>
                        </div>
                        <div className=" max-xl:h-72 xl:col-start-8  xl:-col-end-1 xl:row-start-1 xl:row-end-2" >
                            <img className="h-full w-full" loading="lazy" src="/public/projectTwo/img2.png "/>
                        </div>
                        <div className=" max-xl:h-72 col-span-4">
                            <img className="h-full w-full" loading="lazy" src="/public/projectTwo/img3.png "/>
                        </div>
                        <div className=" max-xl:h-72 col-span-4">
                            <img className="h-full w-full" loading="lazy" src="/public/projectTwo/img4.png "/>
                        </div>
                        <div className=" max-xl:h-72 col-span-4">
                            <img className="h-full w-full" loading="lazy" src="/public/projectTwo/img5.png "/>
                        </div>
                    </div>
                </div>

                <h2 className="headline-2 mb-8 reveal-up" >
                    My portfolio highlights
                </h2>
                <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]" >
                    {works.map(({imgSrc, title, projectLink,tags }, key)=>(
                        <ProjectCard  key={key} imgSrc={imgSrc} classes=" reveal-up" title={title} projectLink={projectLink} tags={tags} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work