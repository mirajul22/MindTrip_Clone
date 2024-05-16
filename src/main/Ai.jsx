import { IoSparklesSharp } from "react-icons/io5";

const Ai = () => {
  return (
    <>
    <section className="py-[10%] ">
       <div className="flex justify-center item-center mb-4">
        <p><IoSparklesSharp className="h-[70px] w-[70px]"/></p>
        </div>
        <div className="text-center">
          <h1 className="text-7xl font-semibold mb-1">Al-powered travel,</h1>
          <h1 className="text-7xl font-semibold">Personalized to you</h1>
        </div>
        <div className="flex item-center justify-around py-[10%]">
            <div>
                <img src="images/1_Img.jpg" alt="1" height={700} width={700}/>
            </div>
            <div className="py-[13%] ">
                <h2 className="text-5xl font-medium mb-4">Personlized</h2>
                <p>Ask us anything travel-related. We gather content</p>
                <p> from thousands of sources and, based on your</p>
                <p>unique preferences, we’ll curate experiences that</p>
                <p>will inspire and excite you.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Ai