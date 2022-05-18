import { useEffect, useState } from "react";

const useItemDetails = itemId => {
    // state for item details
    const [item, setItem] = useState({});

    // loading the item data
    useEffect(() => {

    }, [itemId])

}