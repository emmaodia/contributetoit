import React, { useEffect, useState } from 'react';
import Projects from '../component/Projects';
// import { axios } from '../helpers/axios';

function Project() {
  const URL_PATH = `http://localhost:9000/api/v1/projects/`

  const [projects, setProjects] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // fetch(URL_PATH).then((projects) => {
    //   setProjects(projects);
    //   setFetching(false);
    //});
    const getProfiles = async () => {
    const response = await fetch(URL_PATH)
    const data = await response.json();
      
    setProjects(data);
    setFetching(false);
    console.log(data);
  }
  getProfiles();
  }, [setProjects]);

  if (fetching) return <p>fetching...</p>;

  return (
   
   <section>
     <div>Working...{console.log("Im here")}</div>
    <article className='pt-10 pb-8'>
     <h1 className='text-5xl font-light'>Projects</h1>
   </article>

   <section className='flex flex-wrap'>
     {projects.map((project) => (
       <Projects
          key={project._id}
          link={`${URL_PATH}${project._id}`}
          title={project.title}
          msg={project.msg}
          msg={project.url}
       />
     ))}
   </section> 
 </section>
  );
}

export default Project;
