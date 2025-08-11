import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogs } from '../../utils/data';
import { TagLink } from '../../components';
import ReactMarkdown from 'react-markdown';





const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blog = blogs.find(blog => blog.id === id);

  useEffect(() => {
    if (blog) {
      document.title = `antonio gobernado | ${blog.title}`;
    } else {
      document.title = `Blog no encontrado`;
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="mt-20 text-center text-red-600 font-bold">
        <p>Entrada de blog no encontrada.</p>
      </div>
    );
  }

  return (
   <div className="mt-20 px-4 sm:px-0 flex flex-col gap-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-primary">{blog.title}</h1>
      <p className="text-gray-500 text-sm">{blog.date}</p>

      {blog.imagen && (
        <img src={blog.imagen} alt={blog.title} className="w-full max-h-[400px] object-cover rounded-lg" />
      )}

     

      <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {blog.tags?.map((tag, index) => (
          <TagLink key={index} label={tag} href="#" isRoute={false} active={false} />
        ))}
      </div>

      <Link to="/portfolio-pink/blog" className="text-primary hover:underline mt-6">
        ← Volver al blog
      </Link>
    </div>
  );
};

export default BlogDetailPage;


