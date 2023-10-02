import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Erreur lors de la récupération des données");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
            });

        return () => controller.abort();
    }, [url]);

    return data;
};

export default useFetch;