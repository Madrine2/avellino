// pages/food/cat/index.tsx
import { useRouter } from 'next/router';
import Table from "@/components/table/table";

// Example data fetching function
const fetchData = (mealType: string) => {
    const data = {
        breakfast: [
            { SL: '1', Image: 'images/breakfast1.png', Name: 'Sausages', Price: '2500', Status: 'Available' },
            { SL: '2', Image: 'images/breakfast2.png', Name: 'Pancakes', Price: '1500', Status: 'Available' },
        ],
        lunch: [
            { SL: '1', Image: 'images/lunch1.png', Name: 'Burger', Price: '3000', Status: 'Available' },
            { SL: '2', Image: 'images/lunch2.png', Name: 'Salad', Price: '2000', Status: 'Available' },
        ],
        dinner: [
            { SL: '1', Image: 'images/dinner1.png', Name: 'Steak', Price: '5000', Status: 'Available' },
            { SL: '2', Image: 'images/dinner2.png', Name: 'Pasta', Price: '3500', Status: 'Available' },
        ],
    };

    return data[mealType] || [];
};

const Cat = ({ headers = [], data = [] }) => {
    return (
        <div>
            <Table data={data} headers={headers} />
        </div>
    );
};

export async function getServerSideProps(context) {
    const { query } = context;
    const mealType = query.mealType

    if (!mealType) {
        return {
            notFound: true,
        };
    }

    const data = fetchData(mealType as string);

    return {
        props: {
            headers: ['SL', 'Image', 'Name', 'Price', 'Status'],
            data,
        },
    };
}

export default Cat;
