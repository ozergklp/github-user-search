import React, { useEffect } from 'react'
import { GoPerson, GoPeople, GoRepo } from "react-icons/go";
import { SiGithub } from "react-icons/si";

export default function ContainerTwo({user}) {
    return (
        <section id='container-2'>
            <aside>
                <GoPeople />
                <p id='followers'>Followers<br/>{user.followers}</p>
            </aside>
            <aside>
                <GoPerson />
                <p id='following'>Following<br/>{user.following}</p>
            </aside>
            <aside>
                <GoRepo />
                <p id='repos'>Repos<br/>{user.public_repos}</p>
            </aside>
            <a href={user.html_url}>
            <SiGithub id='github-icon' ></SiGithub>
            </a>
            
        </section>
    )
}
