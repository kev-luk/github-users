import { useState, useEffect } from 'react'
import Card from './components/Card'
import SearchBar from './components/SearchBar'

function App() {
  const [userData, setUserData] = useState([])
  const [loading, isLoading] = useState(false)
  const [query, setQuery] = useState('kev-luk')

  useEffect(() => {
    const fetchUserData = () => {
      isLoading(true)

      fetch(`https://api.github.com/users/${query}`)
        .then(res => res.json())
        .then(data => setUserData(data))

      isLoading(false)
    }

    fetchUserData()
  }, [query])

  return (
    <div>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <Card data={userData} isLoading={loading} />
    </div>
  )
}

export default App;
