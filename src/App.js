import { useState, useEffect } from 'react'
import Card from './components/Card'

function App() {
  const [userName, setUserName] = useState('kev-luk')
  const [userData, setUserData] = useState([])
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    const fetchUserData = () => {
      isLoading(true)

      fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(data => setUserData(data))

      isLoading(false)
    }

    fetchUserData()
  }, [userName])

  return (
    <div>
      <Card data={userData} isLoading={loading} />
    </div>
  )
}

export default App;
