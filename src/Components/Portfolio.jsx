const Portfolio = ({ data }) => {
  return (
    <div className="">
      <h1>Portfolio Section</h1>
      <div>My Projects:</div>
      <Project projects={data.projects} />
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <div>
      {projects.map((p, id) => (
        <div key={id} className="project">
          <div>{p.name}</div>
          <div>{p.description}</div>
          {p.url && (
            <div>
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.url}
              </a>
            </div>
          )}
          {p.image && (
            <div>
              <img src={`images/projects/${p.image}`} alt={p.name} />
            </div>
          )}
          {p.github && (
            <div>
              Github repo:{" "}
              <a href={p.github} target="_blank" rel="noreferrer">
                {p.github}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
