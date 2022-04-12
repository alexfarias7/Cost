import ProjectForm from '../../project/ProjectForm';
import * as Styled from './styles'

function NewProject() {
  return (
    <Styled.ContainerNewProject>
      <h1>Novo Projeto</h1>
      <p>texto do novo projeto</p>
      <p>Formulario</p>
      <ProjectForm btnText ='Criar projetos'/>
    </Styled.ContainerNewProject>
  );
}

export default NewProject;
