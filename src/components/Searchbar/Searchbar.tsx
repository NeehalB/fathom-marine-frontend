import { FaSearch } from "react-icons/fa";

interface ISearchbarProps {
  handleSearch: (searchString: string) => void;
}

const Searchbar: React.FC<ISearchbarProps> = ({ handleSearch }) => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        className="block w-full pl-10 pr-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
};

export default Searchbar;
