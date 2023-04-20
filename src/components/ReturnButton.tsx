import { useNavigate } from 'react-router-dom';
import ChevronSvg from '../assets/icons/chevron-left.svg';

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="flex items-center gap-1 rounded-2xl pl-1 pr-4 text-slate-500 hover:bg-slate-50"
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={ChevronSvg} alt="" />
      Return to home
    </button>
  );
};

export default ReturnButton;
