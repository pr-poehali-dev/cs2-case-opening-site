import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Skin {
  id: string;
  name: string;
  weapon: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | "covert";
  image: string;
  price: number;
}

interface CaseOpeningAnimationProps {
  isOpen: boolean;
  onClose: () => void;
  caseName: string;
}

const CaseOpeningAnimation = ({
  isOpen,
  onClose,
  caseName,
}: CaseOpeningAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState<Skin | null>(null);
  const [showResult, setShowResult] = useState(false);

  const skins: Skin[] = [
    {
      id: "1",
      name: "Redline",
      weapon: "AK-47",
      rarity: "covert",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: 2500,
    },
    {
      id: "2",
      name: "Asiimov",
      weapon: "AWP",
      rarity: "covert",
      image:
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
      price: 1800,
    },
    {
      id: "3",
      name: "Hypnotic",
      weapon: "Nova",
      rarity: "common",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      price: 150,
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "from-gray-600 to-gray-400";
      case "uncommon":
        return "from-green-600 to-green-400";
      case "rare":
        return "from-blue-600 to-blue-400";
      case "epic":
        return "from-purple-600 to-purple-400";
      case "legendary":
        return "from-orange-600 to-orange-400";
      case "covert":
        return "from-red-600 to-red-400";
      default:
        return "from-gray-600 to-gray-400";
    }
  };

  const startOpening = () => {
    setIsAnimating(true);
    setShowResult(false);

    setTimeout(() => {
      const randomSkin = skins[Math.floor(Math.random() * skins.length)];
      setResult(randomSkin);
      setIsAnimating(false);
      setShowResult(true);
    }, 3000);
  };

  useEffect(() => {
    if (isOpen) {
      startOpening();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#1A1F2C] rounded-xl p-8 max-w-2xl w-full mx-4 border border-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Открытие {caseName}
          </h2>

          {isAnimating && (
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] rounded-full animate-spin opacity-20"></div>
                <div className="absolute inset-4 bg-[#1A1F2C] rounded-full flex items-center justify-center">
                  <Icon
                    name="Box"
                    size={80}
                    className="text-[#9b87f5] animate-pulse"
                  />
                </div>
              </div>
              <div className="text-xl text-gray-300 animate-pulse">
                Открываем кейс...
              </div>
            </div>
          )}

          {showResult && result && (
            <div className="mb-8 animate-scale-in">
              <div
                className={`p-6 rounded-xl bg-gradient-to-br ${getRarityColor(result.rarity)} mb-4`}
              >
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {result.weapon} | {result.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon name="Coins" size={24} className="text-yellow-400" />
                  <span className="text-2xl font-bold text-white">
                    {result.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-lg text-white/80 uppercase font-bold">
                  {result.rarity}
                </div>
              </div>

              <div className="flex space-x-4 justify-center">
                <button
                  onClick={startOpening}
                  className="px-6 py-3 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] hover:from-[#8B5CF6] hover:to-[#0284C7] text-white font-medium rounded-lg transition-all duration-300"
                >
                  Открыть еще
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseOpeningAnimation;
