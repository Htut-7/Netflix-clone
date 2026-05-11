import "../css/MovieSearch.css";
import { FiSearch } from "react-icons/fi";

export default function MovieSearch({search,setSearch}) {

  return (
    <div className="search-container">
        <input type='text' placeholder="Enter Movie Name..." onChange={(e)=>setSearch(e.target.value)} value={search}/>

        <div className="search-btn">
            <FiSearch className="search-icon"/>
        </div>
    </div>
  )
}
