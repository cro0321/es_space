import React from 'react'


const css = [
    // {
    //     "id": "sun",
    //     "src": "Images/sunE.png",
    //     "alt": "sun",
    //     "tag" : "#sun"
    // },
    {
        "id": "mars",
        "src": "Images/mars.png",
        "alt": "mars",
        "tag" : "#mars"

    },
    {
        "id": "jupiter",
        "src": "Images/jupiterE.png",
        "alt": "jupiter",
        "tag" : "#jupiter"
    
    },
    {
        "id": "saturn",
        "src": "Images/saturnE.png",
        "alt": "saturn",
        "tag" : "#saturn"
    
    },
    {
        "id": "uranus",
        "src": "Images/uranusE.png",
        "alt": "uranus",
        "tag" : "#uranus"
    
    },
    {
        "id": "neptune",
        "src": "Images/neptuneE.png",
        "alt": "neptune",
        "tag" : "#neptune"
    
    }
]


const cssB = [
    // {
    //     "id": "sun",
    //     "src": "Images/sunE.png",
    //     "alt": "sun",
    //     "tag" : "#sun"
    // },
    {
        "id": "mars",
        "src": "Images/mars.png",
        "alt": "mars",
        "tag" : "#mars"

    },
    {
        "id": "jupiter",
        "src": "Images/jupiter.png",
        "alt": "jupiter",
        "tag" : "#jupiter"
    
    },
    {
        "id": "saturn",
        "src": "Images/saturn.png",
        "alt": "saturn",
        "tag" : "#saturn"
    
    },
    {
        "id": "uranus",
        "src": "Images/uranus.png",
        "alt": "uranus",
        "tag" : "#uranus"
    
    },
    {
        "id": "neptune",
        "src": "Images/neptune.png",
        "alt": "neptune",
        "tag" : "#neptune"
    
    }
]
const cssF = [
  
    {
        "id": "mars",
        "src": "Images/marsF.png",
        "alt": "mars",
        "tag" : "#mars"

    },
    {
        "id": "jupiter",
        "src": "Images/jupiterF.png",
        "alt": "jupiter",
        "tag" : "#jupiter"
    
    },
    {
        "id": "saturn",
        "src": "Images/saturnF.png",
        "alt": "saturn",
        "tag" : "#saturn"
    
    },
    {
        "id": "uranus",
        "src": "Images/uranusF.png",
        "alt": "uranus",
        "tag" : "#uranus"
    
    },
    {
        "id": "neptune",
        "src": "Images/neptuneF.png",
        "alt": "neptune",
        "tag" : "#neptune"
    
    }
]

const cssA = [
    // {
    //     "id": "sun",
    //     "src": "Images/sunE.png",
    //     "alt": "sun",
    //     "tag" : "#sun"
    // },
    {
        "id": "mars",
        "src": "Images/marsA.png",
        "alt": "mars",
        "tag" : "#mars"

    },
    {
        "id": "jupiter",
        "src": "Images/jupiterA.png",
        "alt": "jupiter",
        "tag" : "#jupiter"
    
    },
    {
        "id": "saturn",
        "src": "Images/saturnA.png",
        "alt": "saturn",
        "tag" : "#saturn"
    
    },
    {
        "id": "uranus",
        "src": "Images/uranusA.png",
        "alt": "uranus",
        "tag" : "#uranus"
    
    },
    {
        "id": "neptune",
        "src": "Images/neptuneA.png",
        "alt": "neptune",
        "tag" : "#neptune"
    
    }
]



function Orbit() {
    return (
        <>
            <div className="w-full h-full">
                <div className="w-[1280px] h-[100px] mx-auto">             
                    <div id="mainContent">
                        {/* <img id="sun" src="Images/sun.gif"alt='sun'/> */}
                        {/* <img id="sun" src="Images/sunF.png"alt='sun'/> */}
                       <p id='sun' className='text-5xl'>Eun Seong Space</p>
                        {/* <img id="mercury" src="Images/mercury.png" alt='mercury' /> */}
                        {/* <span id="mercury" className="">#mercury</span> */}
                        {/* <img id="venus" src="Images/venus.png" alt='venus' /> */}
                        {/* <span id="venus" className="">#venus</span> */}

                        {/* <img id="earth" src="Images/earth.png" alt='earth' /> */}
                             {/* <span id="earth" className="">#earth</span> */}
                        {/* <img id="mars" src="Images/mars.png" alt='mars' /> */}

{/* 
                        {
                                css.map((e,i)=>{
                                    return(
                                        <>
                                        <img id={e.id} src={e.src} alt={e.alt} />
                                        <span  id={e.id}className="">{e.tag}</span>
                                        </>
                                    )
                                })


                        } */}

{
                                cssA.map((e,i)=>{
                                    return(
                                        <>
                                        <img id={e.id} src={e.src} alt={e.alt} />
                                        <span  id={e.id}className="">{e.tag}</span>
                                        </>
                                    )
                                })


                        }







{/* 
                          <img id="mars" src="Images/marsE.png" alt='mars' />
                        <span id="mars" className="">#mars</span>


                        <img id="jupiter" src="Images/jupiterE.png" alt='jupiter' />
                        <span id="jupiter" className="">#jupiter</span>
                       
                        <img id="saturn" src="Images/saturnE.png" alt='saturn' />
                        <span id="saturn" className="">#saturn</span>
                        <div className=""></div>
                        
                        <img id="uranus" src="Images/uranusE.png" alt='uranus' />
                        <span id="uranus" className="">#uranus</span>
                        
                        <img id="neptune" src="Images/neptune.png" alt='neptune' />
                        <span id="neptuneE" className="">#neptune</span> */}
                    </div>
                    
                    {/* <div cas="a">
                        <img src="Images/cm.png" width="20px" height="20px" /></div> */}
                </div>
            </div>
        </>
    )
}

export default Orbit