/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import P from 'prop-types';

import Input from '../layout/form/Input';
import Select from '../layout/form/Select';
import ButtonSubmit from '../layout/form/Submit';
import * as Styled from './styles';

function ProjectForm({ handleSubmit, projectData, btnText }) {
  const [Category, setCategory] = useState([]);
  const [project, Setproject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        ContentType: 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    Setproject({ ...project, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    Setproject({
      ...project,
      Category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <Styled.Formulario onSubmit={submit}>
      <Input
        type="text"
        text="Nome do  projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleChange={handleChange}
        value={project.name ? project.name: ''}

      />
      <Input
        type="text"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleChange={handleChange}
        value={project.budget ? project.budget:''}

      />

      <Select
        options={Category}
        name="Category_id"
        text="Selecione uma categoria"
        hamdleOnChange={handleCategory}
        value={project.Category ? project.Category.id : ''}

      />
      <ButtonSubmit text={btnText} />
    </Styled.Formulario>
  );
}

ProjectForm.propTypes = {
  btnText: P.string.isRequired,
  handleSubmit: P.func.isRequired,
  projectData: P.node.isRequired,
};
export default ProjectForm;
