import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const { username } = useParams();
    
    useEffect(() => {
        if(username !== undefined){
            setSearchTerm(username)
        }
        
    }, [username])
    

    return (
        <>
        <header id='header'>
            <h1>Github User Search</h1>
            <aside id='search-aside'>
                <GoSearch id='search-icon'/>
                <input value={searchTerm}  type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={() => navigate(`/${searchTerm}`)}>search</button>
            </aside>
        </header>
        <Outlet />
        </>
    )
}
