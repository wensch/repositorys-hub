
import { useParams  } from "react-router-dom";

const Repositorys = () => {

  const {repositorio} = useParams();
  
  return (
    <h1>
      Repository
      <span>{decodeURIComponent(repositorio)}</span> 
    </h1>
  )
}

export default Repositorys