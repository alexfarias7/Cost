/* eslint-disable no-console */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Message from '../../layout/Message/index';
import LinkButon from '../../layout/LinkButton';
import ProjectCard from '../../project/ProjectCard';
import Loader from '../../layout/Loader/Index';

import * as Styled from './style';

function Project() {
  const [projects, setProjects] = useState([]);
  const [RemoveLoading, setRemoveLoading] = useState(false);
  const [projectMesssage, setProjectMesssage] = useState('')

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((e) => console.log(e));
    }, 500);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setProjects(Project.filter((project) => project.id !== id));
        setProjectMesssage('projeto removido com sucesso!')
      })
      .catch((err) => console.log(err));
  }

  return (
    <Styled.ProjectContainer>
      <Styled.TitleContainer>
        <h1>Meus projetos</h1>
        <LinkButon minHeight="initial" to="/newproject" text="Criar Projeto" />
      </Styled.TitleContainer>
      {message && <Message type="success" msg={message} />}
      {projectMesssage && <Message type="success" msg={projectMesssage } />}
      <Styled.ContainerStart minHeight="initial">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              budget={project.budget}
              category={project?.category?.name}
              key={project.id}
              name={project.name}
              handleRemove={removeProject}
            />
          ))}
        {!RemoveLoading && <Loader />}
        {RemoveLoading && projects.length === 0 && (
          <p>Não existem projetos cadastrados</p>
        )}
      </Styled.ContainerStart>
    </Styled.ProjectContainer>
  );
}

export default Project;
