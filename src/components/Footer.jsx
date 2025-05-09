import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/fady750'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/fady-nasser-170538342'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/fady2327'
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100006317738411'
    }
];

function Footer() {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2" >
                    <div className="mb-10" >
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>
                        <ButtonPrimary label="start project" icon="chevron_right" href="mailto:fadynn7@gmail.com" classes=" reveal-up" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20" >
                        <div className="" >
                            <p className="mb-2 reveal-up " >sitemap</p>
                            <ul>
                                {sitemap.map(({label, href}, key)=>(
                                    <li key={key} >
                                        <a href={href} className=" block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up " >{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up" >socials</p>
                            <ul>
                                {socials.map(({label, href}, key)=>(
                                    <li key={key} >
                                        <a target="_blank" href={href} className=" block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-10 mb-8 reveal-up" >
                    <a href="/" className="logo reveal-up" >
                        <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
                    </a>
                    <p className=" text-zinc-500 text-sm reveal-up" >
                        &copy 2025 <span className="text-zinc-200" >codewithfady</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
