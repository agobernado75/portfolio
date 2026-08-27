import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  active: boolean;
  href: string;
  label: string;
  isRoute: boolean;
  onClick?: () => void;
  download?: boolean; // 👈 nueva prop para descargas
}

const TagLink: React.FC<Props> = ({ active, href, label, isRoute, onClick, download }) => {
  const className = `button ${active ? 'active' : ''} p-2 bg-secondary text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01]`;

  // Si es descarga directa
  if (download) {
    return (
      <a href={href} download className={className}>
        {label}
      </a>
    );
  }

  // Si es una ruta interna
  if (isRoute) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

  // Si es un botón normal
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default TagLink;
