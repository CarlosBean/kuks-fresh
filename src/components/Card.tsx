import { Meal } from '../models/Meal';
import HeartSvg from '../assets/icons/heart.svg';
import Stars from './Stars';

type Props = {
  data: Meal;
};

const Card = ({ data }: Props) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white">
      <a href="/">
        <img
          className="h-48 w-full rounded-t-3xl object-cover"
          src={data.strMealThumb}
          alt=""
        />
      </a>
      <div className="px-5 py-3">
        <div className="mb-2 flex items-center justify-between">
          <h5 className="text-lg font-medium tracking-tight text-red-600">
            {data.strMeal}
          </h5>
          <img src={HeartSvg} alt="" />
        </div>
        <div className="mb-2 flex items-center gap-2">
          <Stars />
          <p className="align-sub text-sm text-slate-500">32 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
