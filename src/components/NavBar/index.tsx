/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { ActivePage } from "~/shared/types"

import Logo from '~/assets/Logo.png'
import Link from "./Link"
import useMediaQuery from "~/hooks/useQueryMedia"
import ActionButton from "../Button/ActionButton";

type Props = {
  activePage: ActivePage
  isTopOfPage: boolean
  setActivePage: (value: ActivePage) => void
}

const NavBar = (props: Props) => {
  const { activePage, isTopOfPage, setActivePage } = props

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  const flexBetween = 'flex items-center justify-between'
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-main drop-shadow'

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img className="w-40" src={Logo} alt="" />
              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm font-bold`}>
                    <Link
                    page='Home'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    />
                    <Link
                    page='Benefits'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    />
                    <Link
                    page='Our Classes'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    />
                    <Link
                    page='Contact Us'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    />
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p className="cursor-pointer">Sign in</p>
                    <ActionButton setActivePage={setActivePage}>Become a Member</ActionButton>
                  </div>
                </div>
              ) : (
                <button 
                  className="rounded-full bg-secondary p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                  <Bars3BottomRightIcon className="h-5 w-5 text-primary-light" />
                </button>
              )}
            </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[340px] bg-secondary drop-shadow-md">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-primary-light" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className={`${flexBetween} w-full`}>
            <div className='ml-[33%] flex flex-col gap-10 text-2xl text-primary-light'>
              <Link
              page='Home'
              activePage={activePage}
              setActivePage={setActivePage}
              />
              <Link
              page='Benefits'
              activePage={activePage}
              setActivePage={setActivePage}
              />
              <Link
              page='Our Classes'
              activePage={activePage}
              setActivePage={setActivePage}
              />
              <Link
              page='Contact Us'
              activePage={activePage}
              setActivePage={setActivePage}
              />
            </div>
            {/* <div className={`${flexBetween} gap-8`}>
              <p>Sign in</p>
              <ActionButton setActivePage={setActivePage}>Become a Member</ActionButton>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar