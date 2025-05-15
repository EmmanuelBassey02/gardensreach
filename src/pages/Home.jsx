import React from 'react'
import Navbar from '../components/shared/Navbar.jsx'
import Section1 from '../components/Home/Section1'
// import Section1b from '../components/Home/Section1b'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
// import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/shared/Footer.jsx'
import Cta from '../components/shared/Cta.jsx'
import Employment from '../components/shared/Employment.jsx'



function Home() {
  return (
    <>
        <Navbar />
        <Section1 />
        {/* <Section1b /> */}
        <Section2 />
        <Section3 />
        <Employment />
        <Section4 />
        {/* <Section5 /> */}
        <Section6 />
        <Cta />
        <Footer />
    </>
  )
}

export default Home