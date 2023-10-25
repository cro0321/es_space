import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = [
    {
        "adress": "https://team-puripuri.vercel.app/",
        "src": "/Images/puripuri.png",
        "alt": "puripuri",
        "title": "puripuri 팀 프로젝트",
        "date": "2023.09.04~2023.10.06",
        "skill": "react tailwind CSS",
        "desc": "openAPI를 이용한 유기동물 후원/공고사이트",
        "percent": "기여도 20%"
    },
    {
        "adress": "https://team-puripuri.vercel.app/",
        "src": "/Images/bing.png",
        "alt": "bing",
        "title": "binggrae 클론코딩",
        "date": "2023.08.01~2023.09.01",
        "skill": "html css js",
        "desc": "react tailwind CSS로 리팩토리진행중",
        "percent": "기여도 100%"



 
    },
    {
        "adress": "https://team-puripuri.vercel.app/",
        "src": "/Images/sandwich.png",
        "alt": "subway",
        "title": "subway 클론코딩",
        "date": "2023.07.01~2023.07.14",
        "skill": "html css js",
        "desc": "react tailwind CSS로 리팩토리진행중",
        "percent": "기여도 100%"
    }
]

function ProjectSwiper() {
    return (
        <>
            <Swiper
                modules={[Navigation, EffectCards]}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    swiper.map((e, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="w-[90%] h-[650px] cursor-pointer text-left" onClick={() => window.open(`{e.adress}`)} >
                                    <img src={e.src} alt={e.alt} />
                                    <div className="w-full h-[170px] px-2 bg-white text-[#8c8c8c] border-[1px] border-black">
                                        <p className='title text-black'>{e.title}</p>
                                        <div className="mt-2 ">
                                            <p className='text-[#8c8c8c]'>{e.date}</p>
                                            <p className='text-[#8c8c8c]'>{e.skill}</p>
                                            <p className='text-[#8c8c8c]'>{e.desc}</p>
                                            <p className='text-[#8c8c8c]'>{e.percent}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }


                {/* <SwiperSlide>
                    <div className="w-[380px] h-[600px] cursor-pointer text-left" onClick={() => window.open("https://team-puripuri.vercel.app/")} >
                        <img src="/Images/puripuri.png" alt="pruiprui" />
                        <div className="w-[380px] h-[170px] bg-white text-[#8c8c8c] border-[1px] border-black">
                            <p className='title text-black'>
                                puripuri 팀 프로젝트
                            </p>
                            <div className="mt-2">
                                <p className='text-[#8c8c8c]'>2023.09.04~2023.10.06
                                    <p>react tailwind CSS</p>
                                </p>
                                <p> openAPI를 이용한 유기동물 후원/공고사이트
                                </p>
                                <p>기여도 20%</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </>
    )
}

export default ProjectSwiper