const Portfolio = ({ data }) => {
  return (
    <div id="portfolio" className="container mx-auto py-7">
      <div className="divider div-transparent"></div>
      <h1 className="text-4xl greenText flex justify-center">Portfolio</h1>
      <div className="text-2xl greenText flex justify-center py-6">
        Take a look at the projects I’ve worked on
      </div>
      <Project projects={data.projects} />
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      {projects.map((p, id) => (
        <div key={id} className="text-lg greenText py-5 px-5">
          <div className="font-bold">{p.name}</div>
          <div>{p.description}</div>
          <div className="inline-flex items-center py-3 px-3">
            <a href={p.url} target="_blank" rel="noreferrer">
              <img
                src={`portfolio/images/projects/${p.image}`}
                alt={p.name}
                className="border-2 border-green-700 border-opacity-75 hover:opacity-75 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-105 ..."
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
