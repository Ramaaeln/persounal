import Persounal from '../assets/PerSoulnal.png'

export default function Header(){
    return(
         <div className="fixed top-0 w-full content-center z-100 p-10 bg-white/30 rounded flex justify-between">
                 <div>
                   <a href="">
                     <img src={Persounal} alt="Logo" />
                   </a>
                 </div>
                 <div className="gap-15 flex ">
                   <a href="">Product</a>
                   <a href="">Our Story</a>
                   <a href="">Contact</a>
                 </div>
               </div>
    )
}