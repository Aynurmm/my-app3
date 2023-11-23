import imggg1 from '../Images/imggg1.png'
import imggg2 from '../Images/imggg2.png'
import imggg3 from '../Images/imggg3.png'
import imggg4 from '../Images/imggg4.png'
import imggg5 from '../Images/imggg5.png'
import imggg6 from '../Images/imggg6.png'
import './Dice.css'
import React,{ useState} from 'react'

const Dice = () => {
    const [currentImage, setCurrentImage] = useState(imggg1); 
    const imagesArray = [imggg1, imggg2, imggg3, imggg4, imggg5, imggg6];

    const changeImage=()=>{
        const randomIndex = Math.floor(Math.random() * imagesArray.length);
        console.log(randomIndex);
    setCurrentImage(imagesArray[randomIndex]);


}
  
  return (
    <div className='classDice'>

      <img src={currentImage} alt="Dice" onClick={changeImage}/>
    </div>
  );

 }
 

  

export default Dice