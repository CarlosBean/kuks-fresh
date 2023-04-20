import SearchSvg from '../assets/icons/search.svg';

const SearchBar = () => {
  return (
    <div className="relative w-full rounded-3xl bg-slate-100 sm:w-1/3">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
        <span className="text-gray-400">
          <img src={SearchSvg} alt="" />
        </span>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-3xl bg-slate-100 py-3 pl-6 outline-0"
        placeholder="Search by name"
        spellCheck="false"
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;
