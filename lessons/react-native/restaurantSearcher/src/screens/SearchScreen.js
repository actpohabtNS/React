import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
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
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList title={"Cost Effective"} results={filterResultsByPrice("$")}/>
                <ResultsList title={"Middle Pricers"} results={filterResultsByPrice("$$")}/>
                <ResultsList title={"Big Spenders"} results={filterResultsByPrice("$$$")}/>
            </ScrollView>
        </>
    )
}

export default SearchScreen