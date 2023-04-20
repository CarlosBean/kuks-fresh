import Banner from '../components/Banner';
import BannerImg from '../assets/images/about.webp';
import { Meal } from '../models/Meal';
import HeartSvg from '../assets/icons/heart.svg';
import ChevronSvg from '../assets/icons/chevron-left.svg';
import Stars from '../components/Stars';

const MealDetail = () => {
  const data: Meal = {
    strMeal: 'Braised Beef Chilli',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
    idMeal: '52826',
    strInstructions:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vel nostrum veniam quia voluptatem commodi laudantium sed natus amet? Architecto accusantium natus soluta magni voluptate. Sint sunt odio pariatur minima.',
    strArea: 'japanese,mexican',
  };

  return (
    <div className="space-y-8">
      <Banner img={BannerImg}></Banner>
      <button className="flex items-center gap-1 rounded-2xl pl-1 pr-4 text-slate-500 hover:bg-slate-50">
        <img src={ChevronSvg} alt="" />
        Return to home
      </button>
      <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
        <h2 className="text-2xl font-medium tracking-tight text-red-700">
          {data.strMeal}
          <Stars></Stars>
        </h2>
        <img src={HeartSvg} alt="" />
      </div>
      <div className="flex gap-2">
        {data.strArea?.split(',').map((item, i) => (
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
