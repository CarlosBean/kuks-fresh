import Card from './Card';

const CardList = () => {
  const data = [
    {
      strMeal: 'Braised Beef Chilli',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
      idMeal: '52826',
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {data.map(item => (
        <Card key={item.idMeal} data={item} />
      ))}
    </div>
  );
};

export default CardList;
