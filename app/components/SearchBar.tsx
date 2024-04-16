import { FiSearch, FiFilter } from 'react-icons/fi';
const SearchBar = () => {
    return (
      <div className="max-w-md mx-auto flex items-center bg-gray-100 rounded-md mt-8">
        <div className="pl-4">
          <FiFilter className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="ابحث هنا..."
          className="flex-grow px-6 py-4 bg-transparent focus:outline-none text-lg"
        />
        <div className="pr-4">
          <FiSearch className="text-gray-500" />
        </div>
      </div>
    );
  };

  export default SearchBar;
  