import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white z-30 my-20">
      <SectionTitle
        subHeading={"Click it out"}
        heading={"fratured item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16 pb-20">
        <div>
          <img className="rounded-md" src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p className="mb-3">
            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4 border-black">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
