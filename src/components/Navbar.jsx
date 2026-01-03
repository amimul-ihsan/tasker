import { Search } from "lucide-react";

export default function Navbar({ onSearch }) {
  return (
    <nav className="nav">
      <div className="logo">
        <h2 className="">TASKER</h2>
      </div>
      {/* search filed  */}
      <div>
        <form className="search-area" onSubmit={(e) => e.preventDefault()}>
          <div className="search-icon">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search Tasks"
            className="search-filed"
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}
