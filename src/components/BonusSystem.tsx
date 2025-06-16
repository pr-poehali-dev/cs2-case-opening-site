import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface DailyBonus {
  day: number;
  reward: number;
  claimed: boolean;
  today: boolean;
}

const BonusSystem = () => {
  const [currentDay, setCurrentDay] = useState(3);
  const [level, setLevel] = useState(12);
  const [xp, setXp] = useState(2450);
  const [nextLevelXp] = useState(3000);

  const dailyBonuses: DailyBonus[] = [
    { day: 1, reward: 100, claimed: true, today: false },
    { day: 2, reward: 150, claimed: true, today: false },
    { day: 3, reward: 200, claimed: false, today: true },
    { day: 4, reward: 250, claimed: false, today: false },
    { day: 5, reward: 300, claimed: false, today: false },
    { day: 6, reward: 400, claimed: false, today: false },
    { day: 7, reward: 500, claimed: false, today: false },
  ];

  const handleClaimBonus = (day: number) => {
    if (day === currentDay) {
      setXp((prev) => prev + dailyBonuses[day - 1].reward);
      // В реальном приложении здесь была бы логика обновления состояния
    }
  };

  const progressPercent = (xp / nextLevelXp) * 100;

  return (
    <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Icon name="Gift" size={24} className="mr-2 text-[#9b87f5]" />
          Ежедневные бонусы
        </h2>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#0EA5E9]">{level}</div>
            <div className="text-xs text-gray-400">УРОВЕНЬ</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Опыт: {xp.toLocaleString()}</span>
          <span>
            До {level + 1} уровня: {(nextLevelXp - xp).toLocaleString()}
          </span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Daily Bonuses Grid */}
      <div className="grid grid-cols-7 gap-3">
        {dailyBonuses.map((bonus) => (
          <div
            key={bonus.day}
            className={`
              relative p-4 rounded-lg text-center transition-all duration-300 cursor-pointer
              ${
                bonus.claimed
                  ? "bg-green-900/30 border border-green-600"
                  : bonus.today
                    ? "bg-gradient-to-b from-[#9b87f5]/20 to-[#0EA5E9]/20 border border-[#9b87f5] animate-pulse"
                    : "bg-gray-800 border border-gray-700 hover:border-gray-600"
              }
            `}
            onClick={() => handleClaimBonus(bonus.day)}
          >
            <div className="text-sm font-medium text-gray-400 mb-2">
              День {bonus.day}
            </div>
            <div className="flex items-center justify-center mb-2">
              <Icon name="Coins" size={20} className="text-yellow-400 mr-1" />
              <span className="text-white font-bold">{bonus.reward}</span>
            </div>

            {bonus.claimed && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} className="text-white" />
              </div>
            )}

            {bonus.today && !bonus.claimed && (
              <button className="w-full py-1 bg-[#9b87f5] hover:bg-[#8B5CF6] text-white text-xs rounded font-medium transition-colors">
                Забрать
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        Заходи каждый день, чтобы получать больше наград! 🎁
      </div>
    </div>
  );
};

export default BonusSystem;
