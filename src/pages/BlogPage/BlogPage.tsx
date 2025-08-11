import React, { useEffect, useState } from 'react';
import { blogs, tagsBlog } from '../../utils/data';
import { TagLink } from '../../components';
import ItemBlog from '../../components/ItemBlog/ItemBlog';

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'antonio gobernado | blog';
  }, []);

  // Filtrar blogs por tag
  const filteredBlogs = selectedTag
    ? blogs.filter((blog) => blog.tags.includes(selectedTag))
    : blogs;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between border">
        <h2 className="text-center text-4xl font-extrabold text-primary m-4">
          Bitácora Profesional · Blog de Seguridad y Tecnología
        </h2>
      </div>

      {/* Filtros por etiqueta */}
      <div className="flex gap-4 flex-wrap m-4">
        {tagsBlog.map((taglabel, index) => (
          <TagLink
            key={index}
            active={selectedTag === taglabel}
            href="#"
            label={taglabel}
            isRoute={false}
            onClick={() =>
              setSelectedTag(selectedTag === taglabel ? null : taglabel)
            }
          />
        ))}
        {/* Botón para resetear filtro */}
        {selectedTag && (
          <button
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
            onClick={() => setSelectedTag(null)}
          >
            Ver todo
          </button>
        )}
      </div>

      {/* Lista de blogs filtrados */}
      <div className="flex flex-col h-full sm:flex-row">
        <div className="w-full flex flex-col gap-4 justify-center">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <ItemBlog
                key={index}
                id={blog.id}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                
              />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No hay entradas para la etiqueta seleccionada.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


