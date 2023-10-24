import React from 'react'


const skill = [
    {
      "title": "HTML",
      "desc" : "마크업,페이지 콘텐츠 구조화, 폼요소 테이블 등 사용"
    },
    {
      "title": "CSS",
      "desc" : "배경 스타일링, 텍스트 스타이링 등"
    },
    {
      "title": "JS",
      "desc" : "네비게이션 구성, 탭메뉴 구현, 폼유효성 검사 등"
    },
    {
        "title": "REACT",
        "desc" : "설명을 설명설명 설명"
    },
    {
        "title": "Tailwind CSS",
        "desc" : "설명을 설명설명 설명"
    }
  ]
function Skill() {
    return (
        <>       
         <div className="w-full mt-48 h-full relative">
            <div className="skillbg "></div>
            <div className="w-[1280px] mx-auto">
                <div className="px-4">
                    <p className='title font-semibold'>Skill</p>

                    {
                        skill.map((e,i)=>{
                            return(
                                <div className="mt-6">
                                    <p className='title text-base'>{e.title}</p>
                                    <p className='text-[#707070]'>{e.desc}</p>
                                </div>
                            )
                         
                        })
                    }
                    {/* <div className="mt-6">
                        <p className='title text-base'>HTML</p>
                        <p className='text-[#707070]'>마크업,페이지 콘텐츠 구조화, 폼요소 테이블 등 사용</p>
                    </div> */}
                </div>
            </div>
        </div>
        </>

    )
}

export default Skill