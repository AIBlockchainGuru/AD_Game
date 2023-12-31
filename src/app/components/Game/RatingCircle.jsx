
import { staatliches } from "../../utils/font";

const RatingCircle = ({ rating }) => {      
    
    return (
      <div className={`${staatliches.className} text-6xl font-bold 800px:w-[220px] w-[190px] h-[190px] 800px:h-[220px] border-opacity-40 border-[#4E43B1] rounded-full border-[16px] flex items-center justify-center text-center`}>{rating}</div>

    );
};

export default RatingCircle;