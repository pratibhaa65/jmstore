import {
  Search,
  ShoppingCartIcon,
  Gamepad2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1b1b1b]">
      <div className="max-w-7xl mx-auto px-5 py-4 ">
        <div className="flex items-center justify-between gap-6">

          <div className="bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2 font-bold">
            <Gamepad2Icon size={20} />
            <div className="leading-4">
              <p className="text-sm">J M</p>
              <p className="text-[10px]">Store</p>
            </div>
          </div>

          <div className="flex-1 max-w-xl relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search store"
              className="w-full bg-[#e5e5e5] text-black rounded-full py-2 pl-12 pr-4 outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <ShoppingCartIcon
              className="text-white cursor-pointer"
              size={20}
            />

            <Link to="/signin">
              <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a] transition px-5 py-2 rounded-full text-sm">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;