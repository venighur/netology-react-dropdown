import { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown({ list }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button data-id="toggle" className="btn" onClick={() => setShowDropdown(!showDropdown)}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        {showDropdown && <DropdownList list={list}/>}
      </div>
    </div>
  );
}

export default Dropdown;