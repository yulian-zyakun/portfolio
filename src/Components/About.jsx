const About = ({ data }) => {
  return (
    <div className="">
      <h3>About Section</h3>
      <div>{data.name}</div>
      <div>{data.aboutMe}</div>
    </div>
  );
};

export default About;
