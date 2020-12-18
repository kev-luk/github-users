import React, { useState } from 'react'

const SearchBar = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        getQuery(text)
        e.preventDefault()
    }

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search for user"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <input type="submit" className='submit' />
            </form>
        </div>
    )
}

export default SearchBar
