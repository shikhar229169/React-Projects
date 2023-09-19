import { useState, useEffect } from "react";

/**
 * @param currency  
*/
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
    }, [currency])

    console.log(data);
    return data
}

export default useCurrencyInfo