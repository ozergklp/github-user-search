import React from 'react'

export default function ContainerOne({user}) {
    return (
        <section id='container-1'>
            <section id='info'>
                <div id='intro'> 
                    <h2 id='name'>{user.name}/</h2> 
                    <h2 id='login'>{user.login}</h2> 
                </div>
                <p id='bio'>{user.bio}</p>
            </section>
            <img src={user.avatar_url} alt="user_avatar" />
        </section>
        )
}
