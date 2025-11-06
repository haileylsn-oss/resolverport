import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { Coins } from "lucide-react"; 

const Hero = () => {
  const navLinks = ["Earn", "Lend", "Borrow", "Strategies", "Pools", "EUL"];

  return (
    <header className="w-full bg-[#1d2330] border border-[#282e3b] rounded-md overflow-hidden shadow-inner" style={{ boxShadow: "inset 0 -20px 0 0 #262b38" }}>
      <div className="w-full h-[62px] p-0 m-0 flex flex-col items-end justify-between">
        
        <div className="w-full h-[40px]">
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
            width="100%"
            height="36px"
            scrolling="auto"
            frameBorder="0"
            title="coinlib"
            className="w-full border-0"
          ></iframe>
        </div>

        <div className="w-full text-right px-2 py-1 text-[11px] text-[#626b7f] font-normal leading-[14px]">
          <a
            href="https://coinlib.io"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#626b7f] no-underline"
          >
            Cryptocurrency Prices
          </a>{" "}
          by Coinlib
        </div>

      </div>
    </header>
  );
};

export default Hero;
