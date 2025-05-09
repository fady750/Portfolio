import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/Project-1.png',
        title: 'eCommerce website',
        tags: ['SPA', 'eCommerce', 'Development'],
        projectLink: 'https://react-e-commerce-zeta-vert.vercel.app/'
    },
    {
        imgSrc: '/images/Project-2.png',
        title: 'The Wild Oasis',
        tags: ['API', 'SPA', 'Dashboard'],
        projectLink: 'https://classy-sawine-803efc.netlify.app/dashboard'
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
];

function Work() {
    return (
        <section className="section" id="work" >
            <div  className="container" >
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