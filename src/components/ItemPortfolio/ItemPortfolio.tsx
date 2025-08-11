import React from 'react';
import ReactMarkdown from 'react-markdown';




export interface Props {
    title: string,
    date: string,
    description: string,
    href: string,
    tags: string[],
    logo:string
}

const ItemPortfolio:React.FC<Props> = ({ title, date, description, tags,href,logo }) => {
  return (
    <a href={href}>
      <div className="blog-item w-full min-h-96 flex flex-col justify-between items-start bg-lightPink p-8 shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]  hover:shadow-lg">
        <div className='flex flex-col gap-2'>
          <h2 className="text-3xl font-medium text-primary">{title}</h2>
          <div className="blog-item w-full flex flex-col items-center">
            {/* Mostrar logo si existe */}
          {logo && (
            <div className="w-full flex justify-center">
              <img
                src={logo}
                alt={title}
                className="w-[100px] h-[100px] object-contain rounded-md"
              />
            </div>
          )}
          </div>
           
          <p className="blog-item-date italic">{date}</p>
          
           <div className="blog-item-description prose">
                       <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        
        </div>
        <div className='flex gap-4 flex-wrap  m-4'>
        {
          tags.map((taglabel, index)=>{
            return (
            <span key={index}  className={`button ${false ? 'active' : ''} p-2 bg-secondary text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01] `}>
              {taglabel}
            </span>
            )
          })
        }
      </div>
      </div>
    </a>
  );
};

export default ItemPortfolio;