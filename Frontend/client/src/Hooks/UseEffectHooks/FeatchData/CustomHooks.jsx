import React, { useState, useEffect } from "react";


function FetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(`Error: ${err}`))
    }, [url]);

    return { data }

}

export default FetchData