import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [ term, setTerm ] = useState('')
    const [ results, setResults ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState('')

    const searchApi = async () => {
        try {
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            })
            setResults(responce.data.businesses)
        } catch (err) {
            setErrorMessage("Something went wrong")
        }
    }

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>There are {results.length} restaurants for you!</Text>
        </View>
    )
}

export default SearchScreen