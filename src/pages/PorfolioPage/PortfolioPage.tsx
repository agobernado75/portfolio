import React, { useEffect } from 'react';
import { projects } from '../../utils/data';
import { ItemPortfolio } from '../../components';

const PortfolioPage: React.FC<{}> = () => {
  
  useEffect(() => {
    document.title = "antonio gobernado| portfolio";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary m-4">Todo lo que he hecho...hasta ahora</h2>
      </div>
      
      <div className=' flex flex-col h-full sm:flex-row '>
        <div className='h-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
                projects.map((project, index) => {
                return (
                    <ItemPortfolio date={project.date} description={project.description} href={'#'} title={project.title} tags={project.tags} logo={project.logo} key={index}/>
                )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;