import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const { state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input
                    placeholder="Enter Track's name"
                    autoCorrect={false}
                    autoCapitalize="sentences"
                    onChangeText={changeName}
                    value={name}
                />
            </Spacer>

            <Spacer>
                { recording 
                ? <Button title="Stop" onPress={stopRecording} /> 
                : <Button title="Start recording" onPress={startRecording} />
                }
            </Spacer>

            { !recording && locations.length
            ? <Spacer><Button title="Save track" onPress={saveTrack} /></Spacer>
            : null }
        </>
    )
}

export default TrackForm;