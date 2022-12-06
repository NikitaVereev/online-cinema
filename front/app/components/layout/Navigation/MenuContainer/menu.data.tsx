import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			title: 'Главная',
			link: '/',
		},
		{
			icon: 'MdExplore',
			title: 'Коллекции',
			link: '/genres',
		},
		{
			icon: 'MdRefresh',
			title: 'Новинки',
			link: '/fresh',
		},

		{
			icon: 'MdLocalFireDepartment',
			title: 'Популярные',
			link: '/trending',
		},
	],
}

export const userMenu: IMenu = {
	title: 'Профиль',
	items: [],
}
