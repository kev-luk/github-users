import React from 'react'
import { GridLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="loader">
            <GridLoader
                size={25}
                margin={5}
                color={'#005eff'}
            />
        </div>
    )
}

export default Loading
