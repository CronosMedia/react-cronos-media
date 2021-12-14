import { Search } from "@material-ui/icons";
import "./search-bar.scss";

const SearchBar = () => {
	return (
		<div className="search-container">
			<div className="search-area">
				<button className="search-btn">
					<span className="icon">
						<Search />
					</span>
				</button>
				<div className="input-wrapper">
					<input
						type="text"
						placeholder="Caută printre cele mai bune imagini..."
					/>
				</div>
				<div className="filter-wrapper">
					<select name="" id="" className="filter">
						<option value="">Toate imaginile</option>
						<option value="">Editorial</option>
						<option value="">Sport</option>
						<option value="">Creative</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
