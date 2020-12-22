import React from 'react'
import { View } from 'react-native'
import ImagesDetail from '../components/ImageDetail'

function ImagesScreen(props) {
    return (
        <View>
            <ImagesDetail
                title="Forest"
                img={require('../../assets/forest.jpg')}
                rate={7.5}
            />

            <ImagesDetail
                title="Beach"
                img={require('../../assets/beach.jpg')}
                rate={9.1}
            />

            <ImagesDetail
                title="Mountain"
                img={require('../../assets/mountain.jpg')}
                rate={5.7}
            />
        </View>
    )
}

export default ImagesScreen