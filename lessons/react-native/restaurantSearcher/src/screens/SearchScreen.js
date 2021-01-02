import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [ term, setTerm ] = useState('')
    const [ searchApi, results, errorMessage ] = useResults()

    const filterResultsByPrice = (price) => {
        //price === "$" || "$$" || "$$$"
        return results.filter((item) => item.price === price)
    }

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>There are {results.length} restaurants for you!</Text>
            <ResultsList title={"Cost Effective"} results={filterResultsByPrice("$")}/>
            <ResultsList title={"Middle Pricers"} results={filterResultsByPrice("$$")}/>
            <ResultsList title={"Big Spenders"} results={filterResultsByPrice("$$$")}/>
        </View>
    )
}

export default SearchScreen