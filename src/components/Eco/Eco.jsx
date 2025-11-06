import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Info } from "lucide-react";


const Eco = () => {

   const [inWallet, setInWallet] = useState(false);
  const navigate = useNavigate();

  const goToWallet = () => navigate("/wallet");



  return (
    <>
    <section className="relative w-full bg-[#0d111a] text-white py-20 overflow-hidden">

      {/* Left Shape */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>

      {/* Right Shape */}
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center max-w-3xl">
        
        <h6 className="text-sm uppercase tracking-wide text-purple-400 font-semibold mb-2">
          <span>Decentralized Protocol</span>
        </h6>

        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Decentralized protocol for syncing various Wallets issues on a Secure Server.
        </h2>

        <p className="text-gray-300 mb-8">
          Our AI-powered protocol ensures seamless connectivity and secure asset
          management by resolving synchronization challenges across noncustodial wallets
          with no human intervention.
        </p>

        <div className="flex items-center justify-center gap-5 mt-6">
          {/* Routes to /wallet page */}
          <Link
            to="/wallet"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md font-medium"
          >
            Connect Wallet
          </Link>
          <Link
            to="/wallet"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md font-medium"
          >
              Explore Now
          </Link>

         
        </div>

      </div>
    </section>

    
    </>
  );
};

export default Eco;
