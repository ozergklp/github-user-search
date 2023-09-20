import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ContainerOne from './containers/ContainerOne';
import ContainerTwo from './containers/ContainerTwo';



export default function Main({}) {
    const user = useLoaderData();

    return (
            <main>
            {(!user.message && user.avatar_url)  ? (
                <>
                    <ContainerOne user={user} />
                    <ContainerTwo user={user} />
                </>
                ) :  (
                <>
                    <ContainerOne user={emptyUser} />
                    <ContainerTwo user={emptyUser} />
                </>
                )}
            </main>
        

    )
}


export const handleSearchLoader = async ({ params }) => {
    const { username } = params 
    try { 
        const response = await fetch('https://api.github.com/users/' + username); 
        const data = await response.json(); return data; } 
    catch (error) { 
        console.error(error); throw error; 
    } 
}


const emptyUser = {
    avatar_url: 'https://avatars.githubusercontent.com/u/109994179?v=4',
    bio: 'No user with this username exists.',
    followers: 0,
    following: 0,
    repos: 0,
    login: 'empty_user',
    name: 'empty_user',


}

