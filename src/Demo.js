import React from 'react'



export const Demo = ({img,name,description}) => {
    return (
        <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 dim'>
            <img style={{ height: "200px"  }} src={require(`./image/${img}.PNG`)} alt="demo" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Demo;