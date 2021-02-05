const Resume = ({ data }) => {
  return (
    <div id="resume" className="container mx-auto py-7">
      <div className="divider div-transparent"></div>
      <h1 className="text-4xl greenText flex justify-center">My Resume</h1>
      <div className="text-2xl greenText flex justify-center py-6">
        My full resume is available{" "}
        <a
          href="portfolio/YZResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="greenText px-3 hover:text-green-500"
        >
          here
        </a>
      </div>
      <div className="text-2xl greenText flex justify-center py-6">
        Professional Skills
      </div>
      <div className="text-lg">
        <ul>
          {data.skills.map((skill, id) => (
            <li key={id}>
              <span className="greenText font-bold">{skill.name}</span>{" "}
              <span className="greenText">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-2xl greenText flex justify-center py-6">
        Work Experience
      </div>
      <div className="text-lg flex justify-between px-2">
        {data.work.map((w, id) => {
          return (
            <ul key={id}>
              <li>
                <span className="greenText font-bold">{w.company}</span>
              </li>
              <li>
                <span className="greenText font-bold">
                  {w.role} {w.years}
                </span>
              </li>
              <li>
                <span className="greenText">{w.description}</span>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="text-2xl greenText flex justify-center py-6">
        Education
      </div>
      <div className="text-lg greenText flex justify-between">
        {data.education.map((edu, id) => {
          return (
            <ul key={id}>
              <li>
                <span className="greenText font-bold">{edu.school}</span>
              </li>
              <li>
                <span className="greenText font-bold">
                  {edu.degree} ({edu.graduated})
                </span>
              </li>
              <li>
                <span className="greenText">{edu.major}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
