import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NotifyBar = () => {
   const { status } = useSelector( state => state.session );

   return (
      <div className="NotifyBar">
         <span>Buy 6 or more products to <span className="primary">GET</span> wholesale discount.</span>
         { status !== 'auth' && <Link to="/login" className="primary link">Sign up now</Link> }
      </div>
   );
};