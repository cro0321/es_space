import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

function ProjectSwiper() {
    return (
        <>
            <Swiper
                modules={[Navigation, EffectCards]}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                <SwiperSlide>

                    <div className="w-[380px] h-[600px] cursor-pointer text-left" onClick={() => window.open("https://team-puripuri.vercel.app/")} >
                        <img src="/Images/puripuri.png" alt="pruiprui" />
                        <div className="w-[380px] h-[200px] bg-white ">
                            <p className='title text-black'>
                                puripuri 팀 프로젝트
                            </p>
                            <div className="mt-2 ">
                                <p>2023.09.04~2023.10.06
                                    <p>react tailwind CSS</p>
                                </p>
                                <p> openAPI를 이용한 유기동물 후원/공고사이트
                                </p>
                                <p>기여도 20%</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-[380px] h-[600px] cursor-pointer text-left" onClick={() => window.open("https://team-puripuri.vercel.app/")} >
                        <img src="/Images/bing.png" alt="pruiprui" />
                        <div className="w-[380px] h-[200px] bg-white">
                            <p className='title text-black'>
                                puripuri 팀 프로젝트
                            </p>
                            <div className="mt-2">
                                <p>2023.09.04~2023.10.06
                                    <p>react tailwind CSS</p>
                                </p>
                                <p> openAPI를 이용한 유기동물 후원/공고사이트
                                </p>
                                <p>기여도 20%</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-[380px] h-[600px] cursor-pointer text-left" onClick={() => window.open("https://team-puripuri.vercel.app/")} >
                        <img src="/Images/puripuri.png" alt="pruiprui" />
                        <div className="w-[380px] h-[200px] bg-white">
                            <p className='title text-black'>
                                puripuri 팀 프로젝트
                            </p>
                            <div className="mt-2">
                                <p>2023.09.04~2023.10.06
                                    <p>react tailwind CSS</p>
                                </p>
                                <p> openAPI를 이용한 유기동물 후원/공고사이트
                                </p>
                                <p>기여도 20%</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ProjectSwiper