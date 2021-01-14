const Resume = ({ data }) => {
  return (
    <div id="resume" className="container mx-auto py-7">
      <h1 className="text-4xl text-gray-700 flex justify-center">My Resume</h1>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        Overview: {data.overview}
      </div>
      <br />
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        Professional Skills
      </div>
      <div className="text-lg">
        <ul>
          {data.skills.map((skill, id) => (
            <li key={id}>
              <span className="text-green-700 font-bold">{skill.name}</span>{" "}
              <span className="text-green-500 font-bold">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        Work Experience
      </div>
      <div className="text-lg text-gray-800 flex justify-between px-2">
        {data.work.map((w, id) => {
          return (
            <ul key={id}>
              <li>
                Company {" - "}
                <span className="text-green-700 font-bold">{w.company}</span>
              </li>
              <li>
                Position:{" "}
                <span className="text-green-600 font-bold">{w.role}</span>
              </li>
              <li>
                Years:{" "}
                <span className="text-green-600 font-bold">{w.years}</span>
              </li>
              <li>
                Description:{" "}
                <span className="text-green-600 font-bold">
                  {w.description}
                </span>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        Education
      </div>
      <div className="text-lg text-gray-800 flex justify-between">
        {data.education.map((edu, id) => {
          return (
            <ul key={id}>
              <li>
                School{" - "}
                <span className="text-green-700 font-bold">{edu.school}</span>
              </li>
              <li>
                Degree:{" "}
                <span className="text-green-600 font-bold">{edu.degree}</span>
              </li>
              <li>
                Graduation:{" "}
                <span className="text-green-600 font-bold">
                  {edu.graduated}
                </span>
              </li>
              <li>
                Program:{" "}
                <span className="text-green-600 font-bold">{edu.program}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
