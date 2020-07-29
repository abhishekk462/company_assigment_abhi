import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const SearchBar = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />
    Favorite beverage: <FontAwesomeIcon icon={['fab', 'apple']}/>
  </div>
)
export default SearchBar;