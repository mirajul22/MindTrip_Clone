import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <>
     <div className="bg-[url('images/Heroes.jpg')] w-full-screen h-screen bg-cover bg-center  rounded-b-4 bg-no-repeat rounded-b-xl">
       <div className="flex place-item-center justify-around pt-[15%]">
        <div>
            <h1 className="text-9xl font-bold mb-5">Travel<br/>differently</h1>
            <p className="text-lg mb-5">Mindtrip brings the world to you and empowers you<br/> to experience it <span className="font-bold text-[20px]"> your </span>way.</p>
            <div className="flex gap-4">
                <button className="bg-[black] text-white py-5 px-10 rounded-[2.5rem] font-medium">Get started</button>
                <button className="flex item-center  mt-4 gap-2"><FaPlayCircle className="h-[30px] w-[40px]" /> play video</button>
            </div>
        </div>
         <div className="grid">
            <div>
            <img src='images/London.png' alt="1" className="w-[230px] translate-x-[-230px] translate-y-[90px]"/>
            </div>
            <div>
            <img src='images/Rome.png' alt="1" className="w-[230px] translate-x-[90px] translate-y-[-20px]"/>
            </div>
            <div>
            <img src='images/Paris.png' alt="1" className="w-[230px] translate-y-[-600px] translate-x-[100px]"/>
            </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default Hero