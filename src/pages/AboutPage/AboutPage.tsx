import React, { useEffect } from 'react';
import { avatarIcon, yo } from '../../utils/assets';
import { iconsList } from '../../utils/data';
import { IconLink, TagLink } from '../../components';

const AboutPage: React.FC<{}> = () => {

  useEffect(() => {
    document.title = "antonio gobernado | sobre mi";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary">Quien soy?</h2>
      </div>

      <div className=' flex flex-col h-full mt-8 sm:flex-row '>
        <div className='w-[100%] relative flex flex-1 flex-col justify-start items-center sm:w-[30%] '  >
          <div className='relative flex flex-col w-[100%] justify-center items-center '>
            <div className='w-[260px] h-[260px] bg-secondary absolute -z-10' style={{ transform: 'rotate(5deg)' }}>
            </div>
            <img className='w-[220px] h-[270px]' src={yo} alt="" />
          </div>
          {/* BOTONES */}
          <div className='w-[100%] mt-4 flex justify-center gap-2'>
            {/* Resume: descarga PDF */}
            <TagLink active={false} href="/docs/CV25.pdf" label="Descarga CV" isRoute={false} />
          
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

        <div className=' w-[100%] flex justify-center sm:w-[70%]'>
        <div className=' w-[85%] flex flex-col gap-4 mt-12 sm:mt-0'>
            <p className='text-justify'>
                ¡Saludos! Soy Antonio, Ingeniero Químico y Técnico Superior en Prevención de Riesgos Laborales. 
                Mi trayectoria profesional comenzó con una fuerte base científica, la cual he complementado con formación especializada en la seguridad y salud en el trabajo. 
                Desde mis primeros pasos en el ámbito técnico, he desarrollado una vocación clara: integrar el conocimiento multidisciplinar para crear entornos laborales más seguros, eficientes y sostenibles.
            </p>
            <p className='text-justify'>
                A lo largo de mi carrera, me he enfocado en la identificación, 
                evaluación y control de riesgos laborales, especialmente en entornos de la construcción, instalaciones eléctricas, 
                industriales y energías renovables. 
                Mi experiencia abarca desde la implantacion y seguimiento de las medidas de prevención in site 
                hasta la implementación de sistemas de gestión conforme a normativas como ISO 45001, todo con el objetivo de proteger la integridad física de los trabajadores.
                En empresas tales como 
                <a className='link' href='https://www.sice.com'> SICE</a>,  
                <a className='link' href='https://www.vias.es/'>  VIAS Y CONSTRUCCIONES</a>.
                <a className='link' href='https://elpinar.eu/'> GRUPO EL PINAR</a>, 
                <a className='link' href='https://www.ficosa.com/es/'> FICOSA</a>, 
                <a className='link' href='https://www.artecenergy.es/'> ARTEC ENERGY</a>  y <a className='link' href='http://grupo-norte.es/'> GRUPO NORTE</a>. 


            </p>
            <p className='text-justify'>
                Participo activamente en la promoción de una cultura preventiva dentro de las organizaciones, 
                desarrollando contenidos formativos, 
                colaborando en auditorías internas y apoyando iniciativas orientadas a la mejora continua
                 en materia de seguridad. 
                 Además, me interesa profundamente el impacto de la tecnología en la prevención de riesgos, 
                 incluyendo el uso de software especializado aplicado a la seguridad laboral y 
                 automatización de procesos críticos. 
                
            </p>
            <p className='text-justify'>
                En mi tiempo libre disfruto de
                <a className='link' href='#'> Programacion WEB y Desarrollo de Aplicaciones Android</a>,
                y también práctico el <a className='link' href='#'> Running </a> 
                como escape del estrés diario. 
                Estoy siempre abierto a compartir experiencias y conocimientos en el ámbito de la prevención. 
                No dudes en contactarme; será un placer entablar conversaciones enriquecedoras y colaborativas.
            </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

