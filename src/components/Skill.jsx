import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/react-router-svgrepo-com.svg',
        label: 'React Router',
        desc: 'Routing library'
    },
    {
        imgSrc: '/images/redux-svgrepo-com.svg',
        label: 'Redux Toolkit',
        desc: 'State manager'
    },
    {
        imgSrc: '/images/react-query-seeklogo.svg',
        label: 'React Query',
        desc: 'Data fetching'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/styled-components-svgrepo-com.svg',
        label: 'Styled Component',
        desc: 'CSS-in-JS'
    },
    {
        imgSrc: '/images/supabase-logo-icon.svg',
        label: 'Supabase',
        desc: 'Backend-as-a-Service'
    },
    {
        imgSrc: '/images/GSAP1.webp',
        label: 'GSAP',
        desc: 'Animate Anything'
    },
];

function Skill() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]" >
                    {skillItem.map(({imgSrc, label, desc}, key)=>(
                        <SkillCard key={key} imgSrc={imgSrc} classes="reveal-up" label={label} desc={desc} />
                    ))}
                </div>
            </div>
            
        </section>
    )
}


export default Skill
