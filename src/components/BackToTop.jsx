import { FaArrowUp } from "react-icons/fa";

function BackToTop(){

const subir=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}

return(

<button

className="top-btn"

onClick={subir}

>

<FaArrowUp/>

</button>

)

}

export default BackToTop;