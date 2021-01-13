const Portfolio = ({ data }) => {
  return (
    <div id="portfolio" className="container mx-auto py-7">
      <h1 className="text-4xl text-gray-700 flex justify-center">
        My Portfolio Overview
      </h1>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        You are more than welcome to take a look at my projects
      </div>
      <Project projects={data.projects} />
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      {projects.map((p, id) => (
        <div key={id} className="text-lg text-gray-600 py-5 px-5">
          <div className="font-bold">{p.name}</div>
          <div>{p.description}</div>
          {p.url && (
            <div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center py-3 px-3 rounded text-green-300 hover:text-green-700 text-2xl font-bold"
              >
                {p.url}
              </a>
            </div>
          )}
          {p.github && (
            <div>
              Github repo:{" "}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center py-3 px-3 rounded text-green-300 hover:text-green-700 text-2xl font-bold"
              >
                {p.github}
              </a>
            </div>
          )}
          {p.image && (
            <div className="my-3">
              <img
                src={`images/projects/${p.image}`}
                alt={p.name}
                className="border-2 border-green-500 border-opacity-75"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
