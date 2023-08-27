

import AnchorLink from "react-anchor-link-smooth-scroll"

import useMediaQuery from "~/hooks/useQueryMedia"
import { ActivePage } from "~/shared/types"

import { motion } from "framer-motion"


import ActionButton from "~/components/Button/ActionButton"

import HomePageGraphic from '~/assets/HomePageGraphic.png'
import SponsorRedBull from '~/assets/SponsorRedBull.png'
import SponsorFortune from '~/assets/SponsorFortune.png'
import SponsorForbes from '~/assets/SponsorForbes.png'


type Props = {
  setActivePage: (value: ActivePage) => void
}

const Home = (props: Props) => {
  const { setActivePage } = props

  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  return (
    <section
      id="home"
      className="gap-16 py-10 md:h-screen md:pb-6"
    >
      {/* MAIN HEADER & IMG */}
      <motion.div
       className="md:flex mx-auto w-5/6 md:h-5/6 items-center justify-center"
       onViewportEnter={() => setActivePage(ActivePage.Home)}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-10 md:basis-3/5'>
          {/* HEADINGS */}
          <motion.div
           className="mt-20 md:mt-10 basis-3/5"
           initial='hidden'
           whileInView='visible'
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
           }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-24 before:z-[-1] md:before:content-abnormalText">
                <h1 className="uppercase font-montserrat font-bold text-primary-dark text-6xl md:text-7xl">Abnormal</h1>
                <p className="text-xl text-primary-dark font-montserrat font-light py-2">Strive for progress, not perfection</p>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
           className="mt-8 flex items-center justify-center gap-8 md:justify-start"
           initial='hidden'
           whileInView='visible'
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
           }}
          >
            <ActionButton setActivePage={setActivePage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-main underline"
              onClick={() => setActivePage(ActivePage.ContactUs)}
              href={`#${ActivePage.ContactUs}`}
            >
              Learn more
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMG */}
        <div className="flex basis-3/6 justify-center mt-8 md:z-10 md:ml-40 md:mt-16">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="w-full bg-secondary drop-shadow-md mt-6 py-4">
          <div className="mx-auto w-5/6 h-full flex justify-center">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorForbes} className="w-28" alt="sponsor-forbes" />
              <img src={SponsorRedBull} className="w-20" alt="sponsor-redbull" />
              <img src={SponsorFortune} className="w-24" alt="sponsor-fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home