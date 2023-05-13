import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

export const Search = () => {
   const [ searchField, onChangeSearchField ] = useState('');
   const navigate = useNavigate();

   const searchProduct = (event) => {
		event.preventDefault();
		if (!searchField) return;
		navigate(`/products?name=${ searchField }`);
	};

   return (
      <form 
         className="Search" 
         onSubmit={ searchProduct }
      >
         <input 
            type="text" 
            placeholder="Search Product" 
            name="search"
            autoComplete="off"
            value={ searchField }
            onChange={ ({ target }) => onChangeSearchField( target.value ) }
            onBlur={ () => onChangeSearchField('') }
         />
         <button>
            <RiSearchLine />
         </button>
      </form>
   );
};