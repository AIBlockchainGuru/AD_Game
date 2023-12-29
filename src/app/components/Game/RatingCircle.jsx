
import { staatliches } from "../../utils/font";

const RatingCircle = ({ rating }) => {
    
    const calculateColor = () => {
      // You can customize the colors based on your rating scale
      if (rating >= 7) {
        return 'bg-green-500';
      } else if (rating >= 4) {
        return 'bg-yellow-500';
      } else {
        return 'bg-red-500';
      }
    };
  
    const circleStyle = `w-[70px] h-[70px] rounded-full flex items-center justify-center relative ${calculateColor()}`;
  
    return (
      <div className={`${staatliches.className} text-6xl font-bold 800px:w-[220px] w-[190px] h-[190px] 800px:h-[220px] border-opacity-40 border-[#4E43B1] rounded-full border-[16px] flex items-center justify-center text-center`}>{rating}</div>

    );
};

export default RatingCircle;