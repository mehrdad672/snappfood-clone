import { useState , useEffect } from "react";
const Slider = () => {
    const texts= ['غذا ' , 'خواروبار', 'میوه' ,'نان'];
    const [wordSlideIndex , setWordSlideIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => { 
          setWordSlideIndex((prevIndex) => prevIndex ===texts.length - 1 ? 0 : prevIndex + 1 );
        }, 1700);
    
        return () => clearInterval(interval);
      }, []);
    return  <div className="absolute right-[430px]">
        <h1 className="text-[#ff00a6] text-5xl font-bold">{texts[wordSlideIndex]}</h1>
    </div>
}
export default Slider;