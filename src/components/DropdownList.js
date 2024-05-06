import { useState } from 'react';

function DropdownList({ list }) {
  const [active, setActive] = useState(list[0]);

  return (
    <ul data-id="dropdown" className="dropdown">
      {list.map((item, index) => (
        <li className={item === active ? "active" : ""} key={index}>
          <a href="#" onClick={e => e.target.innerHTML === item && setActive(item)}>{item}</a>
        </li>))}
    </ul>
  );
}

export default DropdownList;