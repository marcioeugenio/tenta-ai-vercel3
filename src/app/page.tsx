'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Tenta AI</h1>
      <p className="text-lg mb-6 text-white/80 text-center max-w-md">
        Bem-vindo à plataforma Tenta AI. Essa é a versão inicial do frontend. 
      </p>
      <button
        onClick={() => router.push('/login')}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
      >
        Ir para Login
      </button>
    </div>
  );
}
