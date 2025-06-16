import Icon from "@/components/ui/icon";

interface Drop {
  id: string;
  playerName: string;
  weapon: string;
  skin: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | "covert";
  price: number;
  caseName: string;
  timeAgo: string;
}

const RecentDrops = () => {
  const recentDrops: Drop[] = [
    {
      id: "1",
      playerName: "Player***47",
      weapon: "AK-47",
      skin: "Redline",
      rarity: "covert",
      price: 2500,
      caseName: "Revolution Case",
      timeAgo: "2 мин назад",
    },
    {
      id: "2",
      playerName: "CS2***12",
      weapon: "AWP",
      skin: "Dragon Lore",
      rarity: "covert",
      price: 4800,
      caseName: "Cobblestone Case",
      timeAgo: "5 мин назад",
    },
    {
      id: "3",
      playerName: "Pro***99",
      weapon: "M4A4",
      skin: "Howl",
      rarity: "covert",
      price: 3200,
      caseName: "Huntsman Case",
      timeAgo: "8 мин назад",
    },
    {
      id: "4",
      playerName: "Ace***33",
      weapon: "Glock-18",
      skin: "Fade",
      rarity: "rare",
      price: 850,
      caseName: "Weapon Case",
      timeAgo: "12 мин назад",
    },
    {
      id: "5",
      playerName: "Skill***21",
      weapon: "USP-S",
      skin: "Kill Confirmed",
      rarity: "covert",
      price: 1950,
      caseName: "Gamma Case",
      timeAgo: "15 мин назад",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-400";
      case "uncommon":
        return "text-green-400";
      case "rare":
        return "text-blue-400";
      case "epic":
        return "text-purple-400";
      case "legendary":
        return "text-orange-400";
      case "covert":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-l-gray-500";
      case "uncommon":
        return "border-l-green-500";
      case "rare":
        return "border-l-blue-500";
      case "epic":
        return "border-l-purple-500";
      case "legendary":
        return "border-l-orange-500";
      case "covert":
        return "border-l-red-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Icon name="Activity" size={24} className="mr-2 text-[#0EA5E9]" />
          Последние дропы
        </h2>
        <div className="flex items-center space-x-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm">В реальном времени</span>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {recentDrops.map((drop) => (
          <div
            key={drop.id}
            className={`p-4 bg-gray-800/50 rounded-lg border-l-4 ${getRarityBorder(drop.rarity)} hover:bg-gray-800/70 transition-colors animate-fade-in`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-white font-medium">
                    {drop.playerName}
                  </span>
                  <span className="text-gray-400">получил</span>
                  <span className={`font-bold ${getRarityColor(drop.rarity)}`}>
                    {drop.weapon} | {drop.skin}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>из {drop.caseName}</span>
                  <span>{drop.timeAgo}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Coins" size={16} className="text-yellow-400" />
                <span className="text-white font-bold">
                  {drop.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-[#9b87f5] hover:text-[#8B5CF6] transition-colors text-sm font-medium">
          Посмотреть все дропы →
        </button>
      </div>
    </div>
  );
};

export default RecentDrops;
