/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import HText from '~/components/HText'

import { ActivePage } from '~/shared/types'

import ContactPageGraphic from '~/assets/ContactPageGraphic.jpg'

type Props = {
  setActivePage: (value: ActivePage) => void 
}

const ContactUs = (props: Props) => {
  const { setActivePage } = props

  const inputStyle = 'w-full rounded-lg bg-transparent outline-none border border-primary-main px-5 py-3 placeholder:text-secondary/40'

  const { register, trigger, formState: { errors }, clearErrors } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()

    if(!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24'>
      <motion.div onViewportEnter={() => setActivePage(ActivePage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
          <HText>
            <span className='text-primary-main'>JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className='my-5'>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* FORM & IMG */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              action='https://formsubmit.co/99178b5d633751ef6a9ffc2d301a5596'
              method='POST'
            >
              <div className='mb-5'>
                <input 
                  className={inputStyle}
                  type='text'
                  placeholder='Name'
                  {...register('name',{
                    required: true,
                    maxLength: 100,
                    onChange: () => clearErrors()
                  })}
                />
                {errors.name && (
                  <p className='mt-1 text-red-400'>
                    {errors.name.type === 'required' && 'This field is required.'}
                    {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                  </p>
                )}
                </div>
              <div className='mb-5'>
                <input
                  className={inputStyle}
                  type='text'
                  placeholder='Email'
                  {...register('email',{
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    onChange: () => clearErrors()
                  })}
                />
                {errors.email && (
                  <p className='mt-1 text-red-400'>
                    {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                  </p>
                )}
              </div>

              <div className='mb-5'>
                <textarea
                  className={inputStyle}
                  rows={4}
                  cols={50}
                  placeholder='Message'
                  {...register('Message',{
                    required: true,
                    maxLength: 2000,
                    onChange: () => clearErrors()
                  })}
                />
                {errors.message && (
                  <p className='mt-1 text-red-400'>
                    {errors.message.type === 'required' && 'This field is required.'}
                    {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='rounded-lg bg-secondary text-primary-light px-20 py-3 transition duration-500 hover:bg-primary-dark'
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='rounded-lg overflow-hidden md:before:content-abnormalText w-full before:absolute before:-bottom-14 before:-right-10 before:z-[-1]'>
              <img className='object-cover origin-center' src={ContactPageGraphic} alt="contact-us" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs