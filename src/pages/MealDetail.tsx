import Banner from '../components/Banner';
import BannerImg from '../assets/images/about.webp';
import HeartSvg from '../assets/icons/heart.svg';
import Stars from '../components/Stars';
import { useOneMeal } from '../api/Meals';
import { useParams } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';

const MealDetail = () => {
  const { id } = useParams();
  const { isLoading, data } = useOneMeal(Number(id));

  if (isLoading) {
    return (
      <div className="grid h-screen place-content-center text-xl">
        loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Banner img={BannerImg}></Banner>
      <ReturnButton />
      <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
        <h2 className="text-2xl font-medium tracking-tight text-red-700">
          {data.strMeal}
          <Stars></Stars>
        </h2>
        <img src={HeartSvg} alt="" />
      </div>
      <div className="flex gap-2">
        {data.strArea?.split(',').map((item: string, i: number) => (
          <div key={i} className="rounded-3xl bg-slate-100 px-4 py-2">
            <p className="text-sm font-medium capitalize text-slate-600">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="text-red-700">{data.strInstructions}</div>
    </div>
  );
};

export default MealDetail;
