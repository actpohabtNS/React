import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [ results, setResults ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(responce.data.businesses)
        } catch (err) {
            setErrorMessage("Something went wrong")
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [ searchApi, results, errorMessage ]
}