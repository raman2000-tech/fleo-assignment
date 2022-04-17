import { useState, useEffect } from 'react';

export function useFetch(q, sort, order, page, per_page) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}&page=${page}&per_page=${per_page}`)
            .then(res => res.json())
            .then(res => {
                setData(res.items);
                setLoading(false);
            }).catch(err => {
                setError(true);
                setLoading(false);
            });

    }, [q, sort, order, page, per_page]);

    return { data, error, loading };

}