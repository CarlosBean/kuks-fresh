import { useAllMealsByFilter } from '../api/Meals';
import { Meal } from '../models/Meal';
import Card from './Card';

type Props = {
  category?: string;
};

const CardList = ({ category }: Props) => {
  const filterType = category ? 'c' : 'a';
  const filterText = category || 'mexican';

  const { isLoading, data } = useAllMealsByFilter(filterType, filterText);

  if (isLoading) {
    return (
      <div className="grid h-60 place-content-center text-xl">Loading...</div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item: Meal) => (
        <Card key={item.idMeal} data={item} />
      ))}
    </div>
  );
};

export default CardList;
