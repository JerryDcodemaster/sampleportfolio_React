import '../App.css'
import img from './img/contact.jpg'

const ImageBck = () => {
  return (
    <div className="background">
      <img 
        className='rounded-circle' 
        src={img} alt="Person" 
      />
    </div>
  )
}

export default ImageBck