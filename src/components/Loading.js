import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="loader">
            <BeatLoader
                size={25}
                margin={5}
                color={'#cccccc'}
            />
        </div>
    )
}

export default Loading
