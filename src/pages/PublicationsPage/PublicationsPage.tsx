import React, { useEffect } from 'react';
import { publications } from '../../utils/data';

interface ItemPublicationProps {
  link: string,
  content: string,
  duracion: string
  
}

const ItemPublication: React.FC<ItemPublicationProps> = ({ link, content, duracion }) => {
  return (
    <div>
      <a className='link' href={''}>
        {link}
      </a>
      <p>{content}</p>
      <p>{duracion}</p>
      
    </div>
  );
};

const PublicationsPage: React.FC<{}> = () => {
  
  useEffect(() => {
    document.title = "Antonio Gobernado | Formacion";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary m-4">Mi Formacion...</h2>
      </div>

      <div className=' flex flex-col h-full sm:flex-row '>
        <div className=' w-[100%] flex flex-col gap-4 justify-center'>
            {
                publications.map((publication, index) => {
                return (
                    <ItemPublication content={publication.content} link={publication.link} duracion={publication.duracion}   key={index}/>
                )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default PublicationsPage;