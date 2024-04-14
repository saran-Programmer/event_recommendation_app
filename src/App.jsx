import NavBar from "./components/NavBar/NavBar"
import "./App.module.css"
import DisplayEventTypes from "./components/body/DisplayEventTypes"
import BannerDisplayer from "./components/body/BannerDisplayer"
import DisplayUpCommingEvents from "./components/body/DisplayUpcommingEvents"

const App = () => {
  return(
    <div>
      <NavBar />
      <DisplayEventTypes />
      <BannerDisplayer />
      <DisplayUpCommingEvents />
    </div>
  )
}

export default App