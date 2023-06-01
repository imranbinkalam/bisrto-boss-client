const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-yellow-600">__ {subHeading} __</p>
      <h2 className="text-3xl uppercase border-y-4 py-3 mt-3 font-mono">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
