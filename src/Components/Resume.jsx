const Resume = ({ data }) => {
  return (
    <div className="">
      <h3>Resume Section</h3>
      <div>Overview: {data.overview}</div>
      <br/>
      <div>Professional Skills</div>
      <div>
        <ul>
        {data.skills.map((skill, id) => (<li key={id}><b>{skill.name}</b> {skill.level}</li>))}
        </ul>
      </div>
      <div>Work Experience:</div>
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
      <div>Education:</div>
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
