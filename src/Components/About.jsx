const About = ({ data }) => {
  return (
    <div id="about" className="container mx-auto py-7">
      <h1 className="text-4xl text-gray-700 flex justify-center">
        A little bit of information about me...
      </h1>
      <div className="text-2xl text-gray-700 flex justify-center py-6">
        {data.name}
      </div>
      <div className="text-lg text-gray-600 flex justify-center py-5 px-20 mx-7">
        {data.aboutMe}
      </div>
    </div>
  );
};

export default About;
