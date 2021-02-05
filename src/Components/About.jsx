const About = ({ data }) => {
  return (
    <div id="about" className="container mx-auto py-7">
      <h1 className="text-4xl greenText flex justify-center">
        Hey, I'm Yulian!
      </h1>
      <div className="text-lg greenText flex justify-center py-5 px-20 mx-7">
        {data.aboutMe}
      </div>
    </div>
  );
};

export default About;
