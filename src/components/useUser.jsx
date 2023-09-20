import React from 'react'
import useSWR from 'swr'

export default function useUser(id) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)

    return {
        user: data,
        isLoading,
        isError: error
    }
}


const fetcher = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
};
