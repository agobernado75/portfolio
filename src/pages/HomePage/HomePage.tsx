import React, { useEffect } from 'react'
import { iconsList } from '../../utils/data'
import { IconLink, TagLink } from '../../components'
import { avatarYo } from '../../utils/assets';


const HomePage:React.FC<{}> = () => {
  useEffect(() => {
    document.title = "antonio gobernado| home";
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center hoverselect">
      
        
        <div className="w-[100%] h-[40%] flex flex-col gap-2 sm:w-[45%]">
          <div className='relative flex flex-col w-[100%] justify-center items-center '>
            <div className='w-[260px] h-[260px] bg-secondary absolute -z-10' style={{ transform: 'rotate(5deg)' }}>
            </div>
            <img className='w-[260px] h-[260px]' src={avatarYo} alt="" />
          </div>
            <div className='flex justify-center border '>
              <h2 className="text-center  text-3xl font-black text-primary tracking-wider">ANTONIO GOBERNADO <p><span className='text-lg italic'>(by AGB)</span></p></h2>
            </div>
            <div className='flex justify-center border '>
            <p className='text-xl'>
              Hola, Soy Antonio GB, con titulación de Ingeniero Químico en la <a className='link' href='https://www.uva.es/export/sites/uva/2.estudios/2.03.grados/2.02.01.oferta/estudio/e53c282c-72fd-11ec-ae63-00505682371a/'>Universidad de Valladolid</a>.
              Me dedico a la perservación de la Seguridad Laboral en la empresa y en la sociedad. Tengo como hobby la programación web y desarrollo de apps en entorno android.
              Gracias por visitar mi página web, e interesarte por mi trabajo
            </p>
           
            </div>
            <div className='w-[100%]  mt-4 flex justify-center gap-2'>
              <TagLink active={false} href='/portfolio-pink/about' label='Sobre mi' isRoute={true} />
              <TagLink active={false} href='/portfolio-pink/blog' label='Blog' isRoute={true} />
              <TagLink active={false} href='/portfolio-pink/portfolio' label='Portfolio' isRoute={true} />
              <TagLink active={false} href='/portfolio-pink/publications' label='Mi Formacion' isRoute={true} />
            </div>
            <div className='w-[100%] h-[200px]| flex justify-center gap-2 mt-2'>
            {
            iconsList.map((icon , index)=>{
              return ( 
                  <IconLink active={false} icon={icon.icon} href={icon.address}  title={icon.name}  key={index} />
              )
            })
            }
            </div>
        </div>
        

    </div>
  )
}

export default HomePage