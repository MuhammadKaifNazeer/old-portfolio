import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web Apps' ?
            <ToggleButton active value="Web Apps" onClick={() => setToggle('Web Apps')}>Web Apps</ToggleButton>
            :
            <ToggleButton value="Web Apps" onClick={() => setToggle('Web Apps')}>Web Apps</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'Mobile Apps' ?
            <ToggleButton active value="Mobile Apps" onClick={() => setToggle('Mobile Apps')}>Mobile Apps</ToggleButton>
            :
            <ToggleButton value="Mobile Apps" onClick={() => setToggle('Mobile Apps')}>Mobile Apps</ToggleButton>
          } */}
          <Divider />
          {toggle === 'Games' ?
            <ToggleButton active value="Games" onClick={() => setToggle('Games')}>Games</ToggleButton>
            :
            <ToggleButton value="Games" onClick={() => setToggle('Games')}>Games</ToggleButton>
          }
          <Divider />
          {toggle === 'Mini Projects' ?
            <ToggleButton active value="Mini Projects" onClick={() => setToggle('Mini Projects')}>Mini Projects</ToggleButton>
            :
            <ToggleButton value="Mini Projects" onClick={() => setToggle('Mini Projects')}>Mini Projects</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects