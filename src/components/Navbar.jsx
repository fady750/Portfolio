import { useEffect, useRef } from "react";

function Navbar({navOpen}) {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];
    const initActiveBox = ()=>{
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
    const activeCurrantLink = (event)=>{
        lastActiveLink.current?.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target
        activeBox.current.style.top = event.target.offsetTop + "px";
        activeBox.current.style.left = event.target.offsetLeft + "px";
        activeBox.current.style.width = event.target.offsetWidth + "px";
        activeBox.current.style.height = event.target.offsetHeight + "px";
    }
    window.addEventListener("resize", initActiveBox);
    useEffect(initActiveBox, []);

    return (
        <nav className={"navbar " + (navOpen ? "active" : "" )}>
            {
                navItems.map(({label, link, className, ref}, key)=><a className={className} 
                    key={key} 
                    href={link} 
                    onClick={activeCurrantLink} 
                    ref={ref}>
                        {label}
                </a>)
            }
            <div
                className="active-box"
                ref={activeBox}
            >
            </div>
        </nav>
    )
}

export default Navbar
