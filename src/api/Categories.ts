import { useQuery } from '@tanstack/react-query';
const baseURL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  const response = await fetch(`${baseURL}/categories.php`).then(res =>
    res.json()
  );
  return response.categories;
};

export const useAllCategories = () => useQuery(['categories', 'list'], getAll);
