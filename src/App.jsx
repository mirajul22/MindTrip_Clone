import Ai from "./main/Ai"
import Ai2 from "./main/Ai2"
import Ai3 from "./main/Ai3"
import Content from "./main/Content"
import Hero from "./main/Hero"
import Navbar from "./navigation/Navbar"

const App = () => {
  return (
    <>
     {/* <div className="flex min-h-screen flex-col"> */}
      <Navbar/>
      <Hero/>
      <Ai/>
      <Ai2/>
      <Ai3/>
      <Content/>
      {/* </div> */}
    </>
  )
}

export default App