import { MainCategory } from "../types/Category";

export const categories: MainCategory[] = [
    {
        id: 'oil-filter',
        name: 'Bộ Lọc Dầu',
        imageUrl: '/categories/main (1).png',
        subcategories: [
            {
                id: 'oil-filter-1', name: 'Bộ lọc gió', imageUrl: '/categories/main (1).png',
            },
            {
                id: 'oil-filter-2', name: 'Bộ lọc gió', imageUrl: '/categories/main (1).png',
            },
            {
                id: 'oil-filter-3', name: 'Bộ lọc gió', imageUrl: '/categories/main (1).png',
            },
            {
                id: 'oil-filter-4', name: 'Bộ lọc gió', imageUrl: '/categories/main (1).png',
            },
        ],
    },
    {
        id: 'air-filter',
        name: 'Bộ Lọc Không Khí',
        subcategories: [],
        imageUrl: '/categories/main (2).png',

    },
    {
        id: 'fuel-filter',
        name: 'Bộ Lọc Nhiên Liệu',
        subcategories: [],
        imageUrl: '/categories/main (1).png',

    },
    {
        id: 'cabin-filter',
        name: 'Bộ Lọc Trong Cabin',
        subcategories: [],
        imageUrl: '/categories/main (2).png',
    },
];