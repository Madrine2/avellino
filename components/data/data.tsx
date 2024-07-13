// mockdata.ts
import { MdLocalMovies, MdOutlineDashboard, MdRestaurant } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";

export const mockdata = [
    { label: 'Dashboard', icon: <MdOutlineDashboard />, link: '/' },
    { label: 'Restaurant', icon: <MdRestaurant />, drop: [
            { label: 'Categories', link: '/', drop: [
                    { label: 'Breakfast', link: '/food/cat?mealType=breakfast' },
                    { label: 'Lunch', link: '/food/cat?mealType=lunch' },
                    { label: 'Dinner', link: '/food/cat?mealType=dinner' },
                ]
            },
            { label: 'Orders', icon: MdOutlineDashboard, link: '/' , drop: [
                    { label: 'Add Food', link: '/restaurant/orders/food' },
                    { label: 'Customer Type List', link: '/restaurant/orders/list' }
                ]
            },
        ]
    },
    { label: 'Tvs', icon: <PiTelevisionSimple />, link: '/television/televisionList',
        drop: [
            { label: 'TV Lists', link: '/' },
            { label: 'TV Brand Add', link: '/' },
            { label: 'Serial Number', link: '/' },
        ]
    },
    { label: 'Movies', icon: <MdLocalMovies />, link: '/movies/movieList', drop: [
            { label: 'Movie List', link: '/' },
            { label: 'Select Movie', link: '/' },
            { label: 'Movie Type', link: '/' }
        ]
    },
];
