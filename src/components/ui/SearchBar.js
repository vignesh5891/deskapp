import { React, useState } from 'react';
import SearchDropdown from './SearchDropdown';

function SearchBar() {
    const [ddlVisiblity, setDdlVisiblity] = useState(false);

    return (
        <form>
            <div className="form-group mb-0">
                <i className="dw dw-search2 search-icon"></i>
                <input type="text" className="form-control search-input" placeholder="Search Here" />
                <div className="dropdown">
                    <a href="no-link" className="dropdown-toggle no-arrow" onClick={() => setDdlVisiblity(!ddlVisiblity)}>
                        <i className="ion-arrow-down-c"></i>
                    </a>
                    <SearchDropdown showDropdown={ddlVisiblity} />
                </div>
            </div>
        </form >
    );

}


export default SearchBar;