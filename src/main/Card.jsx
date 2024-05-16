import { LuBedSingle } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { PiAirplaneInFlight } from "react-icons/pi";

const Card = () => {
  return (
    <>
    <section className="bg-white w-full min-h-screen mt-12">
      <div>
        <h1 className="text-6xl font-bold text-center pt-20">Organize it all in one place.</h1>
      </div>
      <div className="flex flex-row item-center justify-center gap-7 mt-20">
      <div className="bg-rose-50 max-w-fit py-12 px-20 rounded-xl">
      <LuBedSingle className="translate-y-[-20px]" />
      <div>
      <h2 className="text-2xl font-semibold mb-4">Hotels</h2>
      <p>Stay at the best hotels around</p>
      <p>the world for the best prices.</p>
      </div>
      </div>

      <div className="bg-rose-50 max-w-fit py-12 px-20 rounded-xl">
      <IoCarSportOutline className="translate-y-[-20px]" />
      <div>
      <h2 className="text-2xl font-semibold mb-4">Car Rental</h2>
      <p>Unlock deals on any type</p>
      <p>of wheels and hit the road.</p>
      </div>
      </div>

      <div className="bg-rose-50 max-w-fit py-12 px-20 rounded-xl">
      <PiAirplaneInFlight className="translate-y-[-20px]" />
      <div>
      <h2 className="text-2xl font-semibold mb-4">Flights</h2>
      <p>Get real-time airfares for</p>
      <p>anywhere you want to jet off to.</p>
      </div>
      </div>

      </div>

      <div className="flex flex-row item-center justify-center gap-7 mt-8">
      <div className="bg-rose-50 max-w-fit py-12 px-20 rounded-xl">
      <LuBedSingle className="translate-y-[-20px]" />
      <div>
      <h2 className="text-2xl font-semibold mb-4">Hotels</h2>
      <p>Stay at the best hotels around</p>
      <p>the world for the best prices.</p>
      </div>
      </div>

      <div className="bg-rose-50 max-w-fit py-12 px-20 rounded-xl">
      <IoCarSportOutline className="translate-y-[-20px]" />
      <div>
      <h2 className="text-2xl font-semibold mb-4">Car Rental</h2>
      <p>Unlock deals on any type</p>
      <p>of wheels and hit the road.</p>
      </div>
      </div>

      <div className="bg-rose-50 max-w-fit py-12 px-20 rounded-xl">
      <PiAirplaneInFlight className="translate-y-[-20px]" />
      <div>
      <h2 className="text-2xl font-semibold mb-4">Flights</h2>
      <p>Get real-time airfares for</p>
      <p>anywhere you want to jet off to.</p>
      </div>
      </div>
      
      </div>
    </section>
    </>
  )
}

export default Card