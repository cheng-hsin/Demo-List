import React from 'react'
import Demo from './Demo'

export const DemoList = ({demos}) => {
    return (
        <div>
            {demos.map((project,i) => {
                return(
                    <Demo
                    key={i}
                    img={project.img}
                    name={project.name}
                    description={project.description}
                    />
                )
            })}
        </div>
    )
}

export default DemoList