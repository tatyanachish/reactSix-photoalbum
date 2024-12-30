import { useState } from "react";
import { data } from "./data";
import { IoArrowUndoOutline,IoArrowRedoOutline } from "react-icons/io5"

function Slides(){
    const [photos,setPhotos] = useState(0)
    const {image} = data[photos]

    const nextPhoto = () => {
        setPhotos(photo => {
            photo++;
            if (photo > data.length - 1){
                return photo = 0
            }
            return photo
        })
    }
    const prevPhoto = () => {
        setPhotos (photo => {
            photo --;
            if(photo < 0) {
                return data.length - 1
            }
            return photo
        })

    }
    
    return(
        <div className="album">            
                <button onClick={prevPhoto}><IoArrowUndoOutline /></button>    
                <img src={image} alt='tree'/>  
                <button onClick={nextPhoto}><IoArrowRedoOutline /></button>
        </div>
    )
}
export default Slides;