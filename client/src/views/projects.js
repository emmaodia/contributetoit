import React, { useEffect, useState } from 'react';
import Projects from '../component/Body';
// import { axios } from '../helpers/axios';

function Project() {
  const exReq = `https://localhost:9000/api/v1/`

  const [projects, setProjects] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // fetch(exReq).then((projects) => {
    //   setProjects(projects);
    //   setFetching(false);
    //});
    const getProfiles = async () => {
    const response = await fetch(exReq)
    const data = await response.json();
      
    setProjects(data.response);
    setFetching(false);
    console.log(data.response);
  }
  getProfiles();
  }, [exReq, setProjects]);

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
          link={`project/${project._id}`}
          msg={project.msg}
       />
     ))}
   </section>
 </section>
  );
}

export default Project;
