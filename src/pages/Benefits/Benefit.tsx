
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { ActivePage } from '~/shared/types'

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

type Props = {
  title: string
  icon: JSX.Element
  desc: string
  setActivePage: (value: ActivePage) => void
}

const Benefit = (props: Props) => {
  const { title, icon, desc,  setActivePage} = props

  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-secondary/10 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-secondary/10 bg-primary-main p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{desc}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-main underline hover:text-secondary-500"
        onClick={() => setActivePage(ActivePage.ContactUs)}
        href={`#${ActivePage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit