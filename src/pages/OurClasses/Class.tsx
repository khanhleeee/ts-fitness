type Props = {
  name: string
  description?: string
  image: string
}

const Class = (props: Props) => {
  const { name, description, image } = props

  const overlayStyle = `w-full h-full p-5 absolute z-30 flex h-full whitespace-normal flex-col items-center justify-center bg-secondary text-center text-white opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
      <div className={overlayStyle}>  
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img className='h-full w-full object-cover origin-center' src={`${image}`} alt="img" />
    </li>
  )
}

export default Class