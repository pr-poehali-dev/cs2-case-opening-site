import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Contract = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1A1F2C] to-gray-800">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-[#1A1F2C] rounded-xl p-8 border border-gray-800">
          <h1 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Icon
              name="FileContract"
              size={32}
              className="mr-3 text-yellow-400"
            />
            Trade Up контракты
          </h1>

          <div className="text-center text-gray-400 py-20">
            <Icon
              name="Shuffle"
              size={64}
              className="mx-auto mb-4 opacity-50"
            />
            <p className="text-xl">Раздел в разработке</p>
            <p>
              Здесь можно будет создавать Trade Up контракты для обмена скинов
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contract;
