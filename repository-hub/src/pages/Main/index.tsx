
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles'
import { useCallback, useState } from 'react'
import api from '../../services/api'
const Main = () => {
  const [repositorio, setRepositorio] = useState('')
  const [listRepositories, setListRepositories] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      setLoading(true)

      try {
        const response = await api.get(`repos/${repositorio}`)
        const name  = response.data.full_name

        setListRepositories([...listRepositories, name])
        setRepositorio('')
      } catch (error) {
        console.error('Erro ao buscar repositório:', error);
        alert('Não foi possível buscar o repositório. Tente novamente.');
      } finally {
        setLoading(false)
      }
    }

    submit()
  }, [repositorio, listRepositories])

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite o nome do repositório"
          value={repositorio}
          onChange={(e) => setRepositorio(e.target.value)}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner size={14} color='#fff' /> : <FaPlus size={14} color='#fff' />}
        </SubmitButton>
      </Form>

      {
        listRepositories.map((repository, index) => (
          <strong key={index}>{repository}</strong>
        ))  }
    </Container>
  )
}

export default Main