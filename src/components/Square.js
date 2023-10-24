import React from 'react'

function Square() {
  return (
<>
<div className="w-full h-full">
    <div className="w-[94%] flex justify-center items-center mx-auto ">
<div className="centerbg px-5 relative">
<div
            className="w-[382px] h-[382px] rounded-full absolute opacity-80 bg-gradient-to-t from-[#fccbff] from-1% via-[#c59ef8] via-35% to-[#e5d3ec] to-80% left-[5%] -bottom-[10%]"
            style={{
              animation: 'rotation 10s infinite linear',
              // transformOrigin: '50% 50%',
              transformStyle: 'preserve-3d'
            }}
          >
            <span
              className="text-black text-lg font-bold absolute left-[5%] -bottom-[10%]"

            >
              #Hello, World!
            </span>
          </div>
{/* <div className="spinner" >
    <div className="spinner1 ">
    </div>
      <p className='mt-6'> 예쁜데 블랙홀 이렇게 돌면 안되겠지... </p>
</div> */}
  <div className=" w-[14px] h-[14px] rounded-full absolute opacity-80
bg-gradient-to-t from-[#fccbff] from-1% via-[#c59ef8] via-35% to-[#e5d3ec] to-80% left-[39.4%] top-[20%]"   style={{
  animation: 'rotation 10s infinite linear',
  // transformOrigin: '50% 50%',
  transformStyle: 'preserve-3d'
}}>

<span
              className="text-black text-lg font-bold absolute left-[5%] -bottom-[10%]"

            >
              #Hello, World!
            </span>
</div>
  <div className=" w-[37px] h-[37px] rounded-full absolute opacity-80
bg-gradient-to-t from-[#fccbff] from-1% via-[#c59ef8] via-35% to-[#e5d3ec] to-80% left-[40.5%] top-[45%]"   style={{
  animation: 'rotation 10s infinite linear',
  // transformOrigin: '50% 50%',
  transformStyle: 'preserve-3d'
}}>
       <span
              className="text-black text-lg font-bold absolute left-[5%] -bottom-[10%]"

            >
              #Hello, World!
            </span>

</div>
  <div className=" w-[10px] h-[10px] rounded-full absolute opacity-80
bg-gradient-to-t from-[#fccbff] from-1% via-[#c59ef8] via-35% to-[#e5d3ec] to-80% right-[36%] top-[5%]"   style={{
  animation: 'rotation 10s infinite linear',
  // transformOrigin: '50% 50%',
  transformStyle: 'preserve-3d'
}}>
         <span
              className="text-black text-lg font-bold absolute left-[5%] -bottom-[10%]"

            >
              #Hello, World!
            </span>
</div>
  <div className=" w-[104px] h-[104px] rounded-full absolute opacity-80
bg-gradient-to-t from-[#fccbff] from-1% via-[#c59ef8] via-35% to-[#e5d3ec] to-80% right-[18%] bottom-[20%]"   style={{
  animation: 'rotation 10s infinite linear',
  // transformOrigin: '50% 50%',
  transformStyle: 'preserve-3d'
}}>
       <span
              className="text-black text-lg font-bold absolute left-[5%] -bottom-[10%]"

            >
              #Hello, World!
            </span>

</div>
</div>

</div>
</div>
</>
  )
}

export default Square