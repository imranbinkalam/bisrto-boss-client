const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-4 mb-6">
      <img
        style={{ borderRadius: "0 150px 150px 150px" }}
        className="w-20 h-20"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}------------</h3>
        <h2>{recipe}</h2>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
