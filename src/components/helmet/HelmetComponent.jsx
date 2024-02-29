import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, description, keywords, author, image }) => {
  return (
    <Helmet>
     <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="movie" />
      <meta name="movie:card" content="summary_large_image" />
      <meta name="movie:title" content={title} />
      <meta name="move:description" content={description} />
      <meta name="movie:image" content={image} />
    </Helmet>
  );
};

export default HelmetComponent;
