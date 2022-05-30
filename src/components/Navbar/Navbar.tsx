import {Link} from 'react-router-dom'
import {ReactComponent as TvLogo} from "../../assets/television.svg";
import React from "react";
import './Navbar.css'

interface NavbarProps {
  searchValue: string,
  updateSearchValue: (arg: string) => void
  detailMode?: boolean
  onClick?: () => void;
  onKeyPress?: (e:React.KeyboardEvent) => void;
}

const Navbar: React.FC<NavbarProps> = (
  {
    searchValue,
    updateSearchValue,
    detailMode= false,
    onClick,
    onKeyPress
  }) => {
  return (
    <div className='navbar'>
      <Link to="/">
        <TvLogo className='app-icon'/>
      </Link>
        <input
          className='search-bar'
          type="text"
          placeholder="Search..."
          value={searchValue}
          onKeyPress={(e) => onKeyPress && onKeyPress(e)}
          onChange={(e) => updateSearchValue(e.target.value)}
        />
      {detailMode && <button className='search-button' onClick={onClick}>Search</button>}

    </div>
  )
}

export default Navbar