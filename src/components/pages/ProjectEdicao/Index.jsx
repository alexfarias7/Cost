/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Loader from '../../layout/Loader/Index';
import Message from '../../layout/Message';

import * as Styled from './styles';
import ProjectForm from '../../project/ProjectForm';

function ProjectEdit() {
  const { id } = useParams();

  const [Project, setProject] = useState([]);
  const [ShowProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [Type, setType] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'applicatiom/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setProject(data);
        })
        .catch((e) => console.log(e));
    }, 1000);
  }, [id]);

  function EditPost(Project) {
    if (Project.budget < Project.Cost) {
      // mensagem
      setMessage('o orçamento  é inválido')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${Project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Project),
    })
      .then((r) => r.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
      })
      .catch((e) => console.log(e));
      setMessage('projeto atualizado')
      setType('success')
  }

  function toogleProjectForm() {
    setShowProjectForm(!ShowProjectForm);
  }

  return (
    <>
      {Project.name ? (
        <Styled.ProjectDetails >
          <Styled.DivProject>
            {message && <Message type={Type} msg={message}/>}
            <Styled.H1P>Projeto: {Project.name}</Styled.H1P>
            <Styled.BtnProject onClick={toogleProjectForm} type="submit">
              {!ShowProjectForm ? 'Editar projeto' : 'Fechar'}
            </Styled.BtnProject>
            {!ShowProjectForm ? (
              <Styled.FormP>
                <p>
                  <span>Categoria:</span> {Project?.Category?.name}
                </p>
                <p>
                  <span>Total de orçamento:</span> R$ {Project.budget}
                </p>
                <p>
                  <span>Total utilizado:</span> R$ {Project.cost}
                </p>
              </Styled.FormP>
            ) : (
              <div>
                <ProjectForm
                  handleSubmit={EditPost}
                  btnText="Concluir"
                  projectData={Project}
                />
              </div>
            )}
          </Styled.DivProject>
        </Styled.ProjectDetails>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProjectEdit;
