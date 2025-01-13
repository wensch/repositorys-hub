
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, ButtonDelete } from './styles'
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
        const data = {
          name: response.data.full_name
        }

        if (listRepositories.find(e => e.name === data.name)) {
          throw new Error('Repositório já cadastrado')
        }
        
        setListRepositories([...listRepositories, data])
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

  const handleDelete = useCallback((name) => {
    const filterRepositories = listRepositories.filter(repository => repository.name !== name);
    setListRepositories(filterRepositories);
  }, [listRepositories]);
  

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

      <List>
        {listRepositories.map((repository, index) => (
          <li key={index}>
            <span>
              <ButtonDelete onClick={() => handleDelete(repository.name)}>
                <FaTrash size={14} color='#ca4141' />
              </ButtonDelete>
              {repository.name}
            </span>
            <a href="#"><FaBars size={20} /></a>
          </li>
        ))}
      </List>

    </Container>
  )
}

export default Main