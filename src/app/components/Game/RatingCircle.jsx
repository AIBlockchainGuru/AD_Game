

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
      <div className={circleStyle}>
        <span className="text-white text-4xl font-bold z-10">{rating}</span>
        <svg
          className="absolute z-0"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10%"
          />
        </svg>
      </div>
    );
};

export default RatingCircle;