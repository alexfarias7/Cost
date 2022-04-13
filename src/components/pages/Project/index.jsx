/* eslint-disable no-console */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Message from '../../layout/Message/index';
import LinkButon from '../../layout/LinkButton';
import ProjectCard from '../../project/ProjectCard';

import * as Styled from './style';

function Project() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
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
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Styled.ProjectContainer>
      <Styled.TitleContainer>
        <h1>Meus projetos</h1>
        <LinkButon minHeight="initial" to="/newproject" text="Criar Projeto" />
      </Styled.TitleContainer>

      {message && <Message type="success" msg={message} />}
      <Styled.ContainerStart minHeight="initial">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              budget={project.budget}
             
              category={project?.category?.name}

              key={project.id}
              name={project.name}
            />
          ))}
      </Styled.ContainerStart>
    </Styled.ProjectContainer>
  );
}

export default Project;
