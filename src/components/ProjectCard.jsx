const ProjectCard = ({ title, description, image, link }) => {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="project-link">
            View project
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;