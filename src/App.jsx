
import Header from "./components/Header"
import Landing from "./components/Landing"
import DiscountSec from "./DiscountSec"

import FeatureCollect from "./FeatureCollect"
import Features from "./Features"
import Gallery from "./Gallery"



function App() {
 

  return (
    <>
     <div className="h-[1000vh]" >
     <Header/>
     <Landing/>
     <Features/>
     <FeatureCollect/>
    <DiscountSec/>
    <Gallery/>
     </div>
    </>
  )
}

export default App
