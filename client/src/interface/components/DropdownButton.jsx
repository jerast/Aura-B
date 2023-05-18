import { useState } from 'react';

export const DropdownButton = ({ children, className, disabled, conditions }) => {
   const [ isOpen, setIsOpen ] = useState( false );

   const handlePointerEnter = () => setIsOpen( true );

   const handlePointerLeave = () => setIsOpen( false );

   return (
      <button 
         className={ className } 
         disabled={ disabled }
         onPointerEnter={ handlePointerEnter }
         onPointerLeave={ handlePointerLeave }
         onClick={ () => setIsOpen( false ) }
      >
         { children[0] }
         { conditions && isOpen && children[1] }
      </button>
   );
};