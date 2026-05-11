import {
  MapPin,
  Phone,
  Mail,
  Gamepad2,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white border-t-2 border-purple-600 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="space-y-8">

          <div>
            <p className="text-sm text-gray-300 leading-6">
              JM Store © 2022 - 2024 An affiliate
              <br />
              with RajMaskey & AshimNeupane
            </p>
          </div>

          <div className="bg-white text-black rounded-2xl px-5 py-3 inline-flex items-center gap-3">
            <Gamepad2 size={24} />
            <div className="leading-4">
              <p className="font-bold">J M</p>
              <p className="text-xs">Store</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-300 leading-6">
              JM Store Inc © 2022 - 2023
              <br />
              An Raj's Company.
            </p>
          </div>

          <div className="w-75 h-13.75 bg-linear-to-r from-black via-gray-800 to-gray-300 rounded-md flex items-center justify-center text-sm font-semibold tracking-wide">
            BLOCKED BY YOUR BANK?
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="space-y-10">

          {/* Address */}
          <div className="flex gap-4 items-start">
            <MapPin size={26} className="mt-1" />

            <p className="text-gray-300 leading-6">
              Biratnagar 5, Pokhara 17
              <br />
              Nepal
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <Phone size={24} />

            <p className="text-gray-300">
              +977 9822789222
            </p>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <Mail size={24} />

            <p className="text-gray-300 underline cursor-pointer">
              contact@jmastore.com.np
            </p>
          </div>
        </div>

        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              About us
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              JMStore or ParcelNepal is Nepal based digital
              marketplace that specializes in the sale of
              videogames, game-keys, and gaming-related
              products.
            </p>
          </div>

          <div className="flex gap-5">
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
              <FaFacebookF size={20} />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
              <FaTwitter size={20} />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
              <FaLinkedinIn size={20} />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
              <FaGithub size={20} />
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <span>See our reviews on</span>

            <span className="text-green-400 text-lg">
              ★
            </span>

            <span className="font-medium">
              Trustpilot
            </span>
          </div>

          <div className="bg-white text-black w-62.5 h-12 rounded-md flex items-center justify-center font-bold text-xl">
            NVIDIA Program
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;