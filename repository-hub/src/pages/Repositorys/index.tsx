
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButtuon, IssuesList, PageActions, IssueFilter, ButtonSetIssues } from "./styles";
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

interface IIssue {
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}


const Repositorys = () => {
  const { repositorio } = useParams();
  const [repository, setRepository] = useState<IRepository>({} as IRepository);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [stateIssues, setStateIssues] = useState('all');


  useEffect(() => {

    async function loadIssues() {
      const response = await api.get(`repos/${repositorio}/issues`, {
        params: {
          state: stateIssues,
          per_page: 5,
          page
        }
      });
      setIssues(response.data);
    }

    loadIssues()
    setLoading(false);
  }, [repositorio, page, stateIssues])

  useEffect(() => {
    setLoading(true);

    async function getRepositorio() {

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`repos/${repositorio}`),
        api.get(`repos/${repositorio}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
            page
          }
        })
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    getRepositorio();
  }, [repositorio])

  const handlePageChange = (direction: string) => {
    setLoading(true);
    setPage(direction === 'next' ? page + 1 : page - 1);
  }

  const handleStateIssues = (state: string) => {
    setStateIssues(state);
  }

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
          <IssueFilter>
            <ButtonSetIssues
              type="button"
              active={stateIssues === 'all'}
              onClick={() => handleStateIssues('all')}
            >
              Todas
            </ButtonSetIssues>
            <ButtonSetIssues
              type="button"
              active={stateIssues === 'open'}
              onClick={() => handleStateIssues('open')}
            >
              Abertas
            </ButtonSetIssues>
            <ButtonSetIssues
              type="button"
              active={stateIssues === 'closed'}
              onClick={() => handleStateIssues('closed')}
            >
              Fechadas
            </ButtonSetIssues>
          </IssueFilter>

          <IssuesList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssuesList>

          <PageActions>
            <button
              type="button"
              disabled={page < 2}
              onClick={() => handlePageChange('prev')}>
              Anterior
            </button>
            <button
              type="button"
              onClick={() => handlePageChange('next')}>
              Proximo
            </button>
          </PageActions>

        </Container>
      }
    </>

  )
}

export default Repositorys