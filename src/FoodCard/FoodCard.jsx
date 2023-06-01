import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item food added the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please LogIn to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-full bg-gray-200 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <h5 className="bg-slate-900 text-white absolute p-2 rounded-md right-4 top-4">
          ${price}
        </h5>
        <div className="card-body text-center">
          <h2 className="font-bold font-mono text-xl">{name}</h2>
          <h5>{recipe}</h5>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="my-8 btn btn-outline border-0 border-b-4 mx-auto block border-yellow-500 text-yellow-600 shadow-xl bg-gray-300 hover:text-yellow-500"
            >
              Add To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
