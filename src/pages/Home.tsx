import Banner from '../components/Banner';
import Quote from '../components/Quote';
import BannerImg from '../assets/images/home.webp';
import ChipList from '../components/ChipList';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import { useState } from 'react';

const Home = () => {
  const [category, setCategory] = useState('');

  return (
    <div className="space-y-8">
      <Quote />
      <Banner img={BannerImg}></Banner>
      <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
        <h2 className="text-2xl font-medium tracking-tight text-red-500">
          RECETAS
        </h2>
        <SearchBar />
      </div>
      <ChipList selected={category} setSelected={setCategory} />
      <CardList category={category} />
    </div>
  );
};

export default Home;
