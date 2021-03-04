import React from 'react';
import './profile.style.css'
import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';



class Profile extends React.Component {
    skill = {
        skillA: 'JavaScript',
        skillB: 'Node.js',
        skillC: 'React',
    }

    render() {
        return (
            <div className="container">
                <Bio />
                <Skills skillA='React' skillB='JavaScript' skillC='Node.js' />
                <Skills skillA='Hello' skillB='Hey' skillC='Hi' />
                <Links />
            </div>
        )
    }
}
export default Profile;