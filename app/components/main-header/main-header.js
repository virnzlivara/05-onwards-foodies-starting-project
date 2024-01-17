"use client" 
import Link from "next/link";
import styles from './main-header.module.css'
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
export default function MainHeader() {
    const path = usePathname();
    return (
        <>
            <MainHeaderBackground/> 
            <header className={styles.header}>
                <Link className={styles["logo"]} href="/">
                    {/* <img src={logoImg.src} alt="A plate with a food on it"></img> */}
                    <Image priority src={logoImg} alt="A plate with a food on it"/>
                    Next Level food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                            {/* <Link href="/meals" className={path.startsWith('/meals') ? 'active' : undefined}>Browse Meals</Link> */}
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink> 
                            {/* <Link href="/community"> Foodies Community</Link> */}
                        </li>

                        {/* <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink> 
                        </li> */}
                    </ul>
                </nav> 

            </header>
        </>
    
    );
}
 