const FoodForm = () => {
    const fields = [
        { id: 'category', label: 'Category', type: 'text' },
        { id: 'components', label: 'Components', type: 'text' },
        { id: 'first-name', label: 'First Name', type: 'text' },
        { id: 'price', label: 'Price', type: 'text' },
        { id: 'description', label: 'Description', type: 'text' },
        { id: 'cooking-time', label: 'Cooking Time', type: 'text' },
        { id: 'active', label: 'Active', type: 'text' },
    ];

    const checkboxes = [
        { id: 'breakfast', label: 'Breakfast' },
        { id: 'lunch', label: 'Lunch' },
        { id: 'dinner', label: 'Dinner' },
    ];

    return (
        <div className="mx-auto w-full max-w-3xl mt-10 border-gray-500 border rounded-lg p-4">
            <form className="w-full">
                <div className="grid md:grid-cols-2 gap-4">
                    {fields.map((field) => (
                        <div key={field.id} className="mb-3">
                            <label className="block text-gray-500 font-bold mb-1" htmlFor={field.id}>
                                {field.label}
                            </label>
                            <input
                                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                id={field.id}
                                type={field.type}
                                placeholder=""
                            />
                        </div>
                    ))}

                    <div className="mb-3">
                        <label className="block text-gray-500 font-bold mb-1">Menu Type</label>
                        <div className="flex flex-col">
                            {checkboxes.map((checkbox) => (
                                <div key={checkbox.id} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        className="appearance-none border-2 border-gray-200 rounded w-5 h-5"
                                        id={checkbox.id}
                                        name={checkbox.id}
                                    />
                                    <label className="ml-2 " htmlFor={checkbox.id}>
                                        {checkbox.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-80 justify-between mb-3">
                        <button className="w-40 h-10 border border-black rounded text-black">Choose File</button>
                        <p>No File Chosen</p>
                    </div>
                    <div className=" w-72 flex justify-between">
                        <button className="w-32 h-10 border border-black rounded text-black">Reset File</button>
                        <button className="w-32 h-10 border border-black rounded text-black">Save File</button>
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-500 font-bold mb-1">Image</label>
                        <div className="w-40 h-40 border border-black"></div>
                    </div>


                </div>
            </form>
        </div>
    );
};

export default FoodForm;
