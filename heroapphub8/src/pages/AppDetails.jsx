import { useParams } from 'react-router-dom'

export default function AppDetails() {
  const { id } = useParams()
  return <h1>App Details Page – ID: {id}</h1>
}
