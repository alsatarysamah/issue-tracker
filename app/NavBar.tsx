'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from 'react-icons/ai';
import classnames from "classnames"

const NavBar = () => {
    const currentPath = usePathname()
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link
                        key={link.href}
                        className={classnames({
                            "text-red-500": currentPath === link.href,
                            "text-zinc-500": currentPath !== link.href,
                            "hover:text-zinc-800 transition-colors": true

                        })}

                        // {`text-zinc-500 hover:text-zinc-800 transition-colors ${currentPath === link.href?"text-red-500":""}` }
                        href={link.href}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default NavBar