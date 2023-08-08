import React from 'react'

const ProjectCard = ({ vidURL, name, bgColor, desc, stack, id }) => {
    return (
        <div style={{ scrollSnapAlign: 'center' }} className='h-[95%] w-[70%] bg-black flex-none mx-10'>
            <div></div>
            <div>
                <h1>{name}</h1>
                <p>{desc}</p>
                
            </div>
        </div>
    )
}

export default ProjectCard