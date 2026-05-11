import "../css/ShowSearch.css"
import { FiSearch } from "react-icons/fi";

export default function ShowSearch({search,setSearch}) {
  return (
    <div className="search-container">
        <input type="text" placeholder="Enter Show Name..." onChange={(e)=>setSearch(e.target.value)} value={search}/>

        <div className="show-btn">
            <button>
                <FiSearch className="show-icon"/>
            </button>
        </div>
    </div>
  )
}
