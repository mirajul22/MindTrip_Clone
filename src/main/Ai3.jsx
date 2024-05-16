import { IoArrowForwardOutline } from "react-icons/io5";

const Ai3 = () => {
  return (
    <>
    <div className="flex item-center justify-around py-[10%]">
            <div>
                <img src="images/3_Img.jpg" alt="1" height={700} width={700}/>
            </div>
            <div className="py-[13%] ">
                <h2 className="text-5xl font-medium mb-4">All in one place</h2>
                <p>Only mindtrip makes it easy for you to keep track of</p>
                <p className="flex">all of your reservation &nbsp;<IoArrowForwardOutline className="mt-1"/>&nbsp; trasnportation,hotels</p>
                <p className="flex">restaurants and activites &nbsp;<IoArrowForwardOutline className="mt-1"/>&nbsp; all in one place.</p>
            </div>
        </div>
    </>
  )
}

export default Ai3