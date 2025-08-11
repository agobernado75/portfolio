import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  active: boolean;
  href: string;
  label: string;
  isRoute: boolean;
  onClick?: () => void;
}

const TagLink: React.FC<Props> = ({ active, href, label, isRoute, onClick }) => {
  const className = `button ${active ? 'active' : ''} p-2 bg-secondary text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01]`;

  if (isRoute) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

  // Si es el botón "Resume", usamos <a> para descargar el PDF
  if (label.toLowerCase() === 'resume') {
    return (
      <a
        href={href}
        download="CV25.pdf"
        className={className}
      >
        {label}
      </a>
    );
  }

  // Si no es ruta ni resume, renderiza un botón normal
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default TagLink;
