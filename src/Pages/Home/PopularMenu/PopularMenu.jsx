import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category == "popular");
  //   const [menu, setMenu] = useState([]);
  //   useEffect(() => {
  //     fetch("/menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const popularItems = data.filter((item) => item.category == "popular");
  //         setMenu(popularItems);
  //       });
  //   }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"From Our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 p-3">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="block mx-auto btn btn-outline text-black bg-white border-0 border-b-4 border-black">
        view Full menu
      </button>
    </section>
  );
};

export default PopularMenu;
