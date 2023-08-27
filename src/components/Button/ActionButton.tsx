import { ReactNode } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { ActivePage } from '~/shared/types'

type Props = {
  children: ReactNode
  setActivePage: (value: ActivePage) => void
}

const ActionButton = (props: Props) => {
  const { children, setActivePage } = props

  return (
    <AnchorLink
      className='rounded-md bg-secondary text-primary-light px-6 py-2 hover:bg-primary-dark transition-colors duration-300'
      href={`#${ActivePage.ContactUs}`}
       onClick={() => setActivePage(ActivePage.ContactUs)}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton