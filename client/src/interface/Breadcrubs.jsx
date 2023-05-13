import { NavLink, useLocation } from 'react-router-dom';

export const Breadcrubs = () => {
   const { pathname } = useLocation();

   if ( pathname === '/' ) return ;

   return (
      <div className="Breadcrumbs">
         <NavLink to={ '/' }>Home</NavLink>
         <NavLink>Home</NavLink>
         <NavLink>Home</NavLink>
         <NavLink>Home</NavLink>
      </div>
   );
};