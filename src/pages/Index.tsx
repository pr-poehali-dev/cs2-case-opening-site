import Header from "@/components/Header";
import BonusSystem from "@/components/BonusSystem";
import PromoCodeSystem from "@/components/PromoCodeSystem";
import CaseGrid from "@/components/CaseGrid";
import RecentDrops from "@/components/RecentDrops";
import CaseOpeningAnimation from "@/components/CaseOpeningAnimation";
import { useState } from "react";

const Index = () => {
  const [isOpeningCase, setIsOpeningCase] = useState(false);
  const [selectedCaseName, setSelectedCaseName] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1A1F2C] to-gray-800">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Добро пожаловать в{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9]">
              CS2Cases
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Открывай кейсы, получай бонусы и используй промокоды для
            максимальной выгоды!
          </p>
        </div>

        <CaseGrid />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <RecentDrops />
          <div className="space-y-8">
            <BonusSystem />
            <PromoCodeSystem />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-[#9b87f5] mb-2">1,247</div>
            <div className="text-gray-400">Открыто кейсов</div>
          </div>
          <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-[#0EA5E9] mb-2">
              ₽85,430
            </div>
            <div className="text-gray-400">Общий выигрыш</div>
          </div>
          <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">12</div>
            <div className="text-gray-400">Текущий уровень</div>
          </div>
          <div className="bg-[#1A1F2C] rounded-xl p-6 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-2">7</div>
            <div className="text-gray-400">Дней подряд</div>
          </div>
        </div>

        <CaseOpeningAnimation
          isOpen={isOpeningCase}
          onClose={() => setIsOpeningCase(false)}
          caseName={selectedCaseName}
        />
      </main>
    </div>
  );
};

export default Index;
