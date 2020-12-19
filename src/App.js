import { useState, useEffect } from 'react'
import Card from './components/Card'
import SearchBar from './components/SearchBar'
import Loading from './components/Loading'

function App() {
  const [userData, setUserData] = useState([])
  const [loading, isLoading] = useState(true)
  const [query, setQuery] = useState('kev-luk')

  useEffect(() => {
    const fetchUserData = () => {
      isLoading(true)

      fetch(`https://api.github.com/users/${query}`)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(err => console.log(err))

      isLoading(false)
    }

    fetchUserData()
  }, [query])

  if (loading) {
    return (
      <Loading />
    )
  } else {
    if (userData.message === "Not Found") {
      return (
        <div className="container">
          <SearchBar getQuery={(q) => setQuery(q)} />
          <div className="card">
            <h1>User not found</h1>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <SearchBar getQuery={(q) => setQuery(q)} />
          <Card data={userData} />
        </div>
      )
    }
  }
}

export default App;
