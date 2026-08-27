import React, { useEffect } from 'react'
import { TagLink } from '../../components'


const NotFoundPage:React.FC<{}> = () => {
  useEffect(() => {
    document.title = "antonio gobernado | notfound";
  }, []);

  return (
    
        <div className="w-[100%] h-[40%] flex flex-col gap-2 sm:w-[45%]">
            <div className='flex justify-between border '>
              <h2 className="text-center  text-3xl font-black text-primary tracking-wider">404</h2>
            </div>
            <div className='flex justify-between border '>
              <h2 className="text-center  text-xl font-black text-primary tracking-wider">Pagina no encontrada :(</h2>
            </div>
            <p className='text-xl'>
                Puedes ver algunas  <a className='link' href='https://www.google.com/search?q=cat+photos'>fotos de gatos</a>.  Disfruta del día!!!!!! :D
            </p>
            <div className='w-[100%]  mt-4 flex justify-start gap-2'>
              <TagLink active={false} href='/' label='Return home' isRoute={true} />
            </div>
        </div>
 
  )
}

export default NotFoundPage