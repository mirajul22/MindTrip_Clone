import Card from "./Card"

const Content = () => {
  return (
    <>
    <section className="bg-red-50 w-full min-h-full">
    <div className="text-center pt-[8%]">
      <h1 className="text-6xl font-semibold">Everything you need</h1>
      <h1 className="text-6xl font-semibold">for your next adventure</h1>
      </div>
      <div className="bg-white flex flex-row item-center justify-evenly gap-4 mx-14 rounded-2xl py-8 mt-[8%]">
        <div className="py-[10%]">
        <h2 className="text-5xl font-medium">Photos,maps +</h2>
        <h2 className="text-5xl font-medium">reviews</h2>
        <p className="text-lg">Don't just read about a place; experience it. with</p>
        <p className="text-lg">vibrant photos, interactive maps and reviews, you'll</p>
        <p className="text-lg">feel like you're already there.</p>
        </div>
        <div>
            <img src="images/4_Img.jpg" alt="1" height={500} width={500}/>
        </div>
      </div>
      <div className="flex justify-center item-center mt-4 mx-14">
        <div className="flex flex-col bg-white py-8 mx-4 rounded-xl">
        <div className="mx-auto">
        <h2 className="text-5xl font-medium">Tailored</h2>
        <h2 className="text-5xl font-medium mb-3">recommendations</h2>
        <p>From the best restaurants in your town to the best</p>
        <p>beaches around the world, we've got you covered.</p>
        <p>Favorite the recommendation you like and add</p>
        <p>them to your trip plan.</p>
        </div>
        <img src="images/5_Img.jpg" alt="1"/>
        </div>
        <div className="flex flex-col bg-white py-8  rounded-xl">
        <div className="mx-auto">
        <h2 className="text-5xl font-medium">Customizable</h2>
        <h2 className="text-5xl font-medium mb-3">trip plans</h2>
        <p>In seconds, we'll curate Customizable itineraries for</p>
        <p>anywhere you'd like to go. Include specifics in your</p>
        <p>requests so we can personalize your plans.</p>
        </div>
        <img src="images/6_Img.jpg" alt="2"/>
        </div>
      </div>

      <div className="bg-white flex flex-row item-center justify-evenly gap-4 mx-14 rounded-2xl py-8 mt-4">
        <div>
            <img src='images/7_Img.png' alt='' height={500} width={500}/>
        </div>
        <div className="py-[12%]">
        <h2 className="text-5xl font-medium">Trip sharing</h2>
        <p className="text-lg">share your travel plans with friends and</p>
        <p className="text-lg">family. Publish your itineraries to help insire</p>
        <p className="text-lg">other travels.</p>
        </div>
      </div>
      <Card/>
    </section>
    </>
  )
}

export default Content