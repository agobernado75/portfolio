import React, { useState } from 'react';
import { verifyPassword, downloadCV } from '../../utils/cv';

interface Props {
  onClose: () => void;
}

const CvModal: React.FC<Props> = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    const valid = await verifyPassword(password);
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    try {
      await downloadCV();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col gap-4 w-[90%] max-w-md p-6 bg-myBackground border border-secondary rounded-lg shadow-lg'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-extrabold text-primary'>Descargar CV</h3>
          <button onClick={onClose} className='text-textColor text-2xl leading-none' aria-label='Cerrar'>
            &times;
          </button>
        </div>

        <p className='text-sm text-textColorPar'>
          ¿Prefieres que te lo envíe? <a className='link' href='mailto:antogobebar@yahoo.es'>Solicita el CV por email</a>
        </p>

        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Contraseña'
          className='p-2 rounded-lg border border-secondary bg-lightPink text-textColor focus:outline-none'
        />

        {error && <p className='text-sm font-bold text-primary'>Contraseña incorrecta. Inténtalo de nuevo.</p>}

        <button
          onClick={handleDownload}
          disabled={loading}
          className='button p-2 bg-secondary text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01]'
        >
          {loading ? 'Descargando...' : 'Descargar'}
        </button>
      </div>
    </div>
  );
};

export default CvModal;