import React from 'react'
import ProjectSwiper from './ProjectSwiper'

function Project() {
    return (
        <>
            <div className="w-full h-full mt-48 relative">
                <div className="max-w-[1280px] h-full mx-auto">
                   <div className="">
                    <p className="title font-semibold">Project</p>
                </div>
                    <ProjectSwiper />
                  
                </div>
            </div>
        </>
    )
}

export default Project