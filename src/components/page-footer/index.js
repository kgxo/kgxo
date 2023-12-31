import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
        theme resource
        </a>
      </p>
    </footer>
  );
}

export default PageFooter;
