import { Link } from 'react-router-dom';
import P from 'prop-types';

import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import * as Styled from './styles';

function ProjectCard({ id, name, budget, Category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <Styled.ProjectCard>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <Styled.CategoryText>
        {Category === 'infra' && (
          <>
            <Styled.SpanInfra /> <b>infra</b>
          </>
        )}
        {Category === 'desenvolvimento' && (
          <>
            <Styled.SpanDesenvolvimento /> <b>infra</b>
          </>
        )}
        {Category === 'desing' && (
          <>
            <Styled.SpanDesing /> <b>Design</b>
          </>
        )}
        {Category === 'planejamento' && (
          <>
            <Styled.SpanPlanejamento />
            <b>Planejamento</b>
          </>
        )}
      </Styled.CategoryText>

      <Styled.ProjectCardAction>
        <Link to={`/project${id}`}>
          <BsPencilFill />
          Editar
        </Link>
        <button type="submit" onClick={remove}>
          <BsTrashFill /> Excluir
        </button>
      </Styled.ProjectCardAction>
    </Styled.ProjectCard>
  );
}
ProjectCard.propTypes = {
  id: P.string.isRequired,
  name: P.string.isRequired,
  budget: P.number.isRequired,
  Category: P.node.isRequired,
  handleRemove: P.func.isRequired,
};
export default ProjectCard;
