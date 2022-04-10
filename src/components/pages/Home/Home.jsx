import * as Styled from './styles';
import savings from '../../../img/savings.svg';
import LinkButon from '../../layout/LinkButton';

function Home() {
  return (
    <Styled.Container>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Começe a gerenciar os seus projetos agora memsmo!</p>

      <LinkButon to='/newproject' text='Criar Projeto'/>
      <img src={savings} alt="Costs" />
    </Styled.Container>
  );
}

export default Home;
