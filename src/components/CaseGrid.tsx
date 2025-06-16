import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Case {
  id: string;
  name: string;
  price: number;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

const CaseGrid = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  const cases: Case[] = [
    {
      id: "1",
      name: "Revolution Case",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      rarity: "common",
    },
    {
      id: "2",
      name: "Kilowatt Case",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=300&fit=crop",
      rarity: "rare",
    },
    {
      id: "3",
      name: "Dreams & Nightmares",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop",
      rarity: "epic",
    },
    {
      id: "4",
      name: "Antique Case",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&h=300&fit=crop",
      rarity: "legendary",
    },
    {
      id: "5",
      name: "Prisma Case",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
      rarity: "common",
    },
    {
      id: "6",
      name: "Fracture Case",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
      rarity: "rare",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-gray-500";
      case "rare":
        return "border-blue-500";
      case "epic":
        return "border-purple-500";
      case "legendary":
        return "border-yellow-500";
      default:
        return "border-gray-500";
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "shadow-gray-500/20";
      case "rare":
        return "shadow-blue-500/20";
      case "epic":
        return "shadow-purple-500/20";
      case "legendary":
        return "shadow-yellow-500/20";
      default:
        return "shadow-gray-500/20";
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Icon name="Box" size={32} className="mr-3 text-[#9b87f5]" />
          Выбери кейс
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <Icon name="Filter" size={16} />
            <span>Сортировка: По цене</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className={`bg-[#1A1F2C] rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${getRarityColor(caseItem.rarity)} ${getRarityGlow(caseItem.rarity)} hover:shadow-lg`}
            onClick={() => setSelectedCase(caseItem)}
          >
            <div className="relative mb-4">
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold uppercase ${
                  caseItem.rarity === "legendary"
                    ? "bg-yellow-500 text-black"
                    : caseItem.rarity === "epic"
                      ? "bg-purple-500 text-white"
                      : caseItem.rarity === "rare"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500 text-white"
                }`}
              >
                {caseItem.rarity}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {caseItem.name}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Coins" size={20} className="text-yellow-400" />
                <span className="text-white font-bold text-lg">
                  {caseItem.price}
                </span>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] hover:from-[#8B5CF6] hover:to-[#0284C7] text-white font-medium rounded-lg transition-all duration-300">
                Открыть
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseGrid;
