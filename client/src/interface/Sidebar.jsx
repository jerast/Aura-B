import { onToogleSidebar } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {

	const { sidebarIsOpen } = useSelector( state => state.app );
	const [ isShow, toogleShow ] = useState( false );
	const dispatch = useDispatch();

	useEffect(() => {
		sidebarIsOpen 
			? toogleShow(true) 
			: setTimeout(() => toogleShow(false), 250);
	}, [sidebarIsOpen]);

	const handleToogleBackdrop = () => 
		sidebarIsOpen 
			? 'Sidebar__backdrop animate-in fade-in duration-300' 
			: 'Sidebar__backdrop animate-out fade-out duration-300';

	const handleCloseSidebar = () => 
		dispatch( onToogleSidebar() );

   return (
      isShow && (
			<div className="Sidebar">
				<div 
					className={ handleToogleBackdrop() }
					onClick={ handleCloseSidebar }
				/>
				<div className={`Sidebar__content ${ sidebarIsOpen ? 'animate-in slide-in-from-left duration-300' : 'animate-out slide-out-to-left duration-300' }`}>					

				</div>
			</div>
		)
   );
};