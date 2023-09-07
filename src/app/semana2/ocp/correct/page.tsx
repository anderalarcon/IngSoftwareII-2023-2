import Button from './button'
import RightArrow from '../../../../assets/icons/rightArrow.svg'
import LeftArrow from '../../../../assets/icons/leftArrow.svg'
import RightArrow2 from '../../../../assets/icons/rightArrow2.svg'

const page = () => {
  return (
    <>
      <Button text='Go Next' iconSrc={RightArrow.src}/>
      <Button text='Go Back' iconSrc={LeftArrow.src}/>
      <Button text='Go Next' iconSrc={RightArrow2.src}/>
      
    </>
  )
}

export default page
