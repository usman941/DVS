import React from 'react'

const Applications = () => {
  return (
    <div className="bg-[#222326] w-full h-auto pb-16">

<div className="justify-center  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-8 mx-10 mt-8">
{/* Card */}
<div className="rounded-xl w-[300px] bg-[#15161B] p-6  ">
<div className="flex  flex-row justify-between -mt-4 -mx-4">
                <div className="flex-row items-center justify-center p-2  bg-[#CBAA5F]  rounded-2xl text-black ">
                  <p className="font-bold text-sm">
                    <AiOutlineClockCircle className="text-red-700 inline-flex " />{" "}
                    Ends in <span className="text-red-700">5d</span>{" "}
                  </p>
                </div>
              </div>
              <div className="flex overflow-hidden">
              <img
                  className="hover:scale-110 h-[220px] cursor-pointer "
                  src={}
                //   src={`${process.env.REACT_APP_GATEWAY_MORALIES_URL}/${item.image}`}
                  // src={`https://gateway.moralisipfs.com/ipfs/${item.image}`}
                />
</div>
</div>
</div>
    </div>
  )
}

export default Applications