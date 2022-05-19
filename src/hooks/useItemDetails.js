import { useEffect, useState } from "react";

const useItemDetails = itemId => {
    // state for item details
    const [item, setItem] = useState({});

    // loading the item data
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId]);
    return [item, setItem];

}

export default useItemDetails;