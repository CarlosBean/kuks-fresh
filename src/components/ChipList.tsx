import Chip from './Chip';

const ChipList = () => {
  const data = [
    {
      idCategory: '1',
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      strCategoryDescription:
        'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.map(item => (
        <Chip key={item.idCategory} data={item}></Chip>
      ))}
    </div>
  );
};

export default ChipList;
