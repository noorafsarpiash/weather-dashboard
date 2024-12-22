import { useContext, useState } from "react";
import { LocationContext } from "../../context";
import SearchIcon from "../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const doSearch = useDebounce((term) => {
    console.log(term);
    const fetechedLocation = getLocationByName(term);
    console.log(fetechedLocation);
    setSelectedLocation({ ...fetechedLocation });
  }, 500);
  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  }

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={handleChange}
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
}
