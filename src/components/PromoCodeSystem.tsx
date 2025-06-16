import { useState } from "react";
import Icon from "@/components/ui/icon";

interface PromoCode {
  code: string;
  type: "coins" | "case" | "multiplier";
  value: number;
  used: boolean;
  date: string;
}

const PromoCodeSystem = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const recentCodes: PromoCode[] = [
    {
      code: "WELCOME2024",
      type: "coins",
      value: 500,
      used: true,
      date: "15.06.2024",
    },
    { code: "NEWBIE", type: "case", value: 1, used: true, date: "14.06.2024" },
    { code: "LUCKY777", type: "multiplier", value: 2, used: false, date: "" },
  ];

  const validCodes = ["BONUS100", "LUCKY777", "NEWBIE50", "VIP2024"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    setIsLoading(true);
    setMessage("");

    // Симуляция проверки промокода
    setTimeout(() => {
      if (validCodes.includes(promoCode.toUpperCase())) {
        setMessageType("success");
        setMessage(`Промокод активирован! Получено: 250 монет 🎉`);
        setPromoCode("");
      } else {
        setMessageType("error");
        setMessage("Промокод не найден или уже использован");
      }
      setIsLoading(false);
    }, 1500);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "coins":
        return "Coins";
      case "case":
        return "Box";
      case "multiplier":
        return "Zap";
      default:
        return "Gift";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "coins":
        return "Монеты";
      case "case":
        return "Кейс";
      case "multiplier":
        return "Множитель";
      default:
        return "Бонус";
    }
  };

  return (
    <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Icon name="Ticket" size={24} className="mr-2 text-[#0EA5E9]" />
        Промокоды
      </h2>

      {/* Promo Code Input */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              placeholder="Введите промокод"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9b87f5] focus:outline-none transition-colors"
              disabled={isLoading}
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin w-5 h-5 border-2 border-[#9b87f5] border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading || !promoCode.trim()}
            className="px-6 py-3 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] hover:from-[#8B5CF6] hover:to-[#0284C7] text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Проверка..." : "Активировать"}
          </button>
        </div>

        {message && (
          <div
            className={`mt-3 p-3 rounded-lg flex items-center ${
              messageType === "success"
                ? "bg-green-900/30 border border-green-600 text-green-400"
                : "bg-red-900/30 border border-red-600 text-red-400"
            }`}
          >
            <Icon
              name={messageType === "success" ? "CheckCircle" : "XCircle"}
              size={16}
              className="mr-2"
            />
            {message}
          </div>
        )}
      </form>

      {/* Recent Codes */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Icon name="History" size={18} className="mr-2 text-gray-400" />
          История промокодов
        </h3>
        <div className="space-y-3">
          {recentCodes.map((code, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    code.type === "coins"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : code.type === "case"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                  }`}
                >
                  <Icon name={getTypeIcon(code.type) as any} size={16} />
                </div>
                <div>
                  <div className="text-white font-medium">{code.code}</div>
                  <div className="text-sm text-gray-400">
                    {getTypeLabel(code.type)}: {code.value}
                    {code.type === "multiplier" ? "x" : ""}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-medium ${
                    code.used ? "text-green-400" : "text-gray-400"
                  }`}
                >
                  {code.used ? "Использован" : "Доступен"}
                </div>
                {code.date && (
                  <div className="text-xs text-gray-500">{code.date}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-900/20 border border-blue-600 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-blue-400 mt-0.5" />
          <div className="text-sm text-blue-300">
            <strong>Подсказка:</strong> Следите за нашими соцсетями, чтобы не
            пропустить новые промокоды!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCodeSystem;
