import { Category } from '../models/Category';

type Props = {
  data: Category;
  onClick: any;
  isActive: boolean;
};

const Chip = ({ data, onClick, isActive }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${isActive ? 'bg-red-400' : 'bg-slate-100'}
        group flex cursor-pointer items-center gap-2 rounded-3xl py-1 pl-2 pr-4 transition duration-200 hover:bg-red-400
      `}
    >
      <img
        src={data.strCategoryThumb}
        alt=""
        className="h-8 rounded-full object-cover"
      />
      <p
        className={`
          ${isActive ? 'text-white' : 'text-slate-600'}
          font-medium transition duration-200 group-hover:text-white
        `}
      >
        {data.strCategory}
      </p>
    </div>
  );
};

export default Chip;
