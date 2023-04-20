import { Category } from '../models/Category';

type Props = {
  data: Category;
};

const Chip = ({ data }: Props) => {
  return (
    <div className="group flex cursor-pointer items-center gap-2 rounded-3xl bg-slate-100 py-1 pl-2 pr-4 transition duration-200 hover:bg-red-400">
      <img
        src={data.strCategoryThumb}
        alt=""
        className="h-8 rounded-full object-cover"
      />
      <p className="font-medium text-slate-700 transition duration-200 group-hover:text-white">
        {data.strCategory}
      </p>
    </div>
  );
};

export default Chip;
