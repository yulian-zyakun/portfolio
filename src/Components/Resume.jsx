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
      <div>
        <ul>
          {data.skills.map((skill, id) => (
            <li key={id}>
              <b>{skill.name}</b> {skill.level}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        Work Experience
      </div>
      <div>
        {data.work.map((w, id) => {
          return (
            <ul key={id}>
              <li>Company: {w.company}</li>
              <li>Position: {w.role}</li>
              <li>Years: {w.years}</li>
              <li>Description: {w.description}</li>
            </ul>
          );
        })}
      </div>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        Education
      </div>
      <div>
        {data.education.map((edu, id) => {
          return (
            <ul key={id}>
              <li>School: {edu.school}</li>
              <li>Degree: {edu.degree}</li>
              <li>Graduation: {edu.graduated}</li>
              <li>Program: {edu.program}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
