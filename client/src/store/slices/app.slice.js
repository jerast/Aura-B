import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		sidebarIsOpen: false,
      modalIsOpen: false,
	},
	reducers: {
		onOpenSidebar: (state) => {
			state.sidebarIsOpen = true;
		},
		onOpenModal: (state) => {
			state.sidebarIsOpen = true;
		},
		onCloseSidebar: (state) => {
			state.sidebarIsOpen = false;
		},
		onCloseModal: (state) => {
			state.modalIsOpen = false;
		},
		onToogleSidebar: (state) => {
			state.sidebarIsOpen = !state.sidebarIsOpen;
		},
		onToogleModal: (state) => {
			state.modalIsOpen = !state.modalIsOpen;
		},
	},
});

export const { 
	onOpenSidebar,
	onOpenModal,
	onCloseSidebar,
	onCloseModal,
	onToogleSidebar,
	onToogleModal,
} = appSlice.actions;
