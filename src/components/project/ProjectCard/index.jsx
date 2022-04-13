import { Link } from 'react-router-dom';
import P from 'prop-types';

import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import * as Styled from './styles';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  return (
    <Styled.ProjectCard>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <Styled.CategoryText>
        {category === 'infra' && (
          <>
            <Styled.SpanInfra>{}</Styled.SpanInfra> {category}
          </>
        )}
        {category === 'Desenvolvimento' && (
          <>
            <Styled.SpanInfra>{}</Styled.SpanInfra> {category}
          </>
        )}
        {category === 'Desing' && (
          <>
            <Styled.SpanInfra>{}</Styled.SpanInfra> {category}
          </>
        )}
        {category === 'Planejamento' && (
          <>
            <Styled.SpanInfra>{}</Styled.SpanInfra> {category}
          </>
        )}
      </Styled.CategoryText>

      <Styled.ProjectCardAction>
        <Link to="/">
          <BsPencilFill />{""}Editar
        </Link>
        <button type="submit">
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
  category: P.node.isRequired,
  handleRemove: P.func.isRequired,
};
export default ProjectCard;
