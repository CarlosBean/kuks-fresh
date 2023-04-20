import StarSvg from '../assets/icons/star.svg';

const Stars = () => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={StarSvg} alt="" />
      ))}
    </div>
  );
};

export default Stars;
