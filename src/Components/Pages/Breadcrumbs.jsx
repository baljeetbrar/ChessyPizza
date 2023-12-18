import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ currentPage }) => {
  const location = useLocation();
  const pages = currentPage.split('/').filter(Boolean);

  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null; // Don't render breadcrumbs on the homepage
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
          <li className="breadcrumb-item breadcrumb-links">
            <Link to="/">Home</Link>
          </li>
        {pages.map((page, index) => (
          <li key={index} className="breadcrumb-item breadcrumb-links">
            {index === pages.length - 1 ? (
              <span>{page}</span>
            ) : (
              <Link to={`/${pages.slice(0, index + 1).join('/')}`}>{page}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
