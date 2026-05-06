export default function Home() {
  const a = 12;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-center bg-red-500 text-white p-4 rounded">
        MEU SITE
      </h1>

      <h2 className="text-2xl mt-4 text-center">
        LUIS CARLOS BRUSTOLIN
      </h2>

      <p className="mt-2">Valor da variável: {a}</p>

      <HomeContent />
    </main>
  );
}

export function HomeContent() {
  return (
    <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      CLIQUE AQUI
    </button>
  );
}