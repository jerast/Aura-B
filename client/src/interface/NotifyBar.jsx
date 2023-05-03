import { Link } from 'react-router-dom';

export const NotifyBar = () => {
   return (
      <div className="NotifyBar">
         <span>Buy 6 or more products to <span className="primary">GET</span> wholesale discount.</span>
         <Link to="/login" className="primary link">Sign up now</Link>
      </div>
   );
};