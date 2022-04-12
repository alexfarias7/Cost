import P from 'prop-types'

import Input from '../layout/form/Input';
import Select from '../layout/form/Select';
import ButtonSubmit from '../layout/form/Submit';
import * as Styled from './styles';

function ProjectForm({ btnText }) {
  return (
    <Styled.Formulario>
      <Input
        type="text"
        text="Nome do  projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleChange={(e) => e.value}
      />
      <Input
        type="text"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleChange={(e) => e.value}
      />

      <Select name="Category_id" text="Selecione uma categoria" />
      <ButtonSubmit text={btnText} />
    </Styled.Formulario>
  );

}

ProjectForm.propTypes ={
  btnText: P.string.isRequired
}
export default ProjectForm;
