
import { useParams  } from "react-router-dom";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
// {decodeURIComponent(repositorio)}
const Repositorys = () => {
  const {repositorio} = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);


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
    <Container>

    </Container>
  )
}

export default Repositorys