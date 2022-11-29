import React from 'react';
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import classes from './../styles/Navbar.module.scss';

type PageType = {
    id: number
    title: string
    path: string
}

const pages: Array<PageType> = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Posts',
        path: '/posts'
    },
    {
        id: 2,
        title: 'Contacts',
        path: '/contacts'
    },
];

const Navbar = () => {

    const {pathname} = useRouter();

    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <Image alt="" src="/logo.jpg" width={60} height={60}></Image>
            </div>
            <div className={classes.links}>
                {pages.map((path: PageType) => (
                    <Link key={path.id} href={path.path} className={pathname === path.path ? classes.active : undefined}>
                        {path.title}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;