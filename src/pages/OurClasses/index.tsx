import { motion } from 'framer-motion'

import { ActivePage, ClassType } from '~/shared/types'
import HText from '~/components/HText'

import class1 from '~/assets/class1.jpg'
import class2 from '~/assets/class2.jpg'
import class3 from '~/assets/class3.jpg'
import class4 from '~/assets/class4.jpg'
import class5 from '~/assets/class5.jpg'
import class6 from '~/assets/class6.jpg'

import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: class1,
  },
  {
    name: "Yoga Classes",
    image: class2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: class3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: class4,
  },
  {
    name: "Fitness Classes",
    image: class5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: class6,
  },
];


type Props = {
  setActivePage: (value: ActivePage) => void
}

const OurClasses = (props: Props) => {
  const { setActivePage } = props

  return (
    <section id='ourclasses' className='w-full' >
      <motion.div
        onViewportEnter={() => setActivePage(ActivePage.OurClasses)}
      > 
      <motion.div
        className='mx-auto w-5/6'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='md:w-3/5'>
          <HText>Our Classes</HText>
          <p className='py-5'>
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
            enim mattis odio in risus nunc.
          </p>
        </div>
        
      </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, i) => (
              <Class key={`${item.name}-${i}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses