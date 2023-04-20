import { Dispatch, SetStateAction } from 'react';
import { useAllCategories } from '../api/Categories';
import { Category } from '../models/Category';
import Chip from './Chip';

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const ChipList = ({ selected, setSelected }: Props) => {
  const { isLoading, data } = useAllCategories();

  if (isLoading) {
    return <div className="grid h-full place-content-center">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.map((item: Category) => (
        <Chip
          key={item.idCategory}
          data={item}
          onClick={() => setSelected(item.strCategory)}
          isActive={selected === item.strCategory}
        ></Chip>
      ))}
    </div>
  );
};

export default ChipList;
