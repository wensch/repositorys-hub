
import { useParams  } from "react-router-dom";
import { Container, Owner, Loading, BackButtuon } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";


interface IRepository {
  name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}



const Repositorys = () => {
  const {repositorio} = useParams();
  const [repository, setRepository] = useState<IRepository>({} as IRepository);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect( () => {
    setLoading(true);

    async function getRepositorio() {

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`repos/${repositorio}`),
        api.get(`repos/${repositorio}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    getRepositorio();
  }, [repositorio])
  
  return (
    <>
    {loading ?
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
      :
      <Container>
        <BackButtuon to="/">
          <FaArrowLeft size={20} color="#000" />
        </BackButtuon>
        <Owner>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    }
    </>
    
  )
}

export default Repositorys