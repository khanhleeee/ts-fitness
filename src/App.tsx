import { useEffect, useState } from "react"

import { ActivePage } from "~/shared/types"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Benefit from "./pages/Benefits"
import OurClasses from "./pages/OurClasses"
import ContactUs from "./pages/ContactUs"

function App() {
  const [activePage, setActivePage] = useState<ActivePage>(ActivePage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setActivePage(ActivePage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    } 
  }, [])

	return <div className='app bg-primary-light'>
    <NavBar
      activePage={activePage}
      isTopOfPage={isTopOfPage}
      setActivePage={setActivePage}
    />
    <Home setActivePage={setActivePage}/>
    <Benefit setActivePage={setActivePage}/>
    <OurClasses setActivePage={setActivePage}/>
    <ContactUs setActivePage={setActivePage}/>
    <Footer />
  </div>
}

export default App
