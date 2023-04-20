import { useQuery } from '@tanstack/react-query';
const baseURL = import.meta.env.VITE_API_URL;

const getOne = (id: number) => async () => {
  const response = await fetch(`${baseURL}/lookup.php?i=${id}`).then(res =>
    res.json()
  );
  return response.meals[0];
};

const getAllByFilter = (type: string, text: string) => async () => {
  const response = await fetch(`${baseURL}/filter.php?${type}=${text}`).then(
    res => res.json()
  );

  if (type === 'a') {
    return response.meals.slice(0, 10);
  }

  return response.meals;
};

export const useOneMeal = (id: number) =>
  useQuery(['meals', 'detail', id], getOne(id));

export const useAllMealsByFilter = (type: string, text: string) =>
  useQuery(['meals', type, text, 'list'], getAllByFilter(type, text));
