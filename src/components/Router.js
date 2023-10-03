import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import How from './pages/How'
import JoinUs from './pages/JoinUs'


function Router() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/how-to" element={<How />} />
        <Route path="/join-us" element={<JoinUs/>} />
      </Routes>
    </div>
  )
}

export default Router
