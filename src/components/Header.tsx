import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();
  const [coins, setCoins] = useState(1250);

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/profile", label: "Профиль", icon: "User" },
    { path: "/upgrade", label: "Апгрейд", icon: "TrendingUp" },
    { path: "/contract", label: "Контракт", icon: "FileContract" },
  ];

  return (
    <header className="bg-[#1A1F2C] border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 from-[#9b87f5] to-[#0EA5E9] rounded-lg flex items-center justify-center bg-[#e5121200]">
              <Icon name="Box" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">CS2Cases</span>
          </Link>

          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#9b87f5] text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
            <Icon name="Coins" size={16} className="text-yellow-400" />
            <span className="text-white font-bold">
              {coins.toLocaleString()}
            </span>
          </div>

          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
            <Icon name="Bell" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
