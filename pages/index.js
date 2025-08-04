import { useState } from "react";

export default function Home() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const verificarSenha = async () => {
    setErro("");
    if (!senha.trim()) {
      setErro("Por favor, insira a senha.");
      return;
    }

    try {
      const res = await fetch(`/api/verificar?senha=${senha}`);
      if (res.ok) {
        const data = await res.json();
        window.location.href = data.link;
      } else {
        setErro("Senha incorreta. Tente novamente.");
      }
    } catch {
      setErro("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-center items-center px-6">
      <div className="bg-white max-w-md w-full rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 tracking-wide select-none">
          🔒 Acesso ao Transcript
        </h1>
        <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
          Insira a senha que você recebeu no privado para acessar seu transcript.
        </p>

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="w-full px-6 py-4 rounded-xl border border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-indigo-300 text-lg transition"
        />

        {erro && (
          <p className="mt-3 text-red-500 text-sm font-medium select-none" role="alert">
            {erro}
          </p>
        )}

        <button
          onClick={verificarSenha}
          className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
        >
          Acessar
        </button>
      </div>

      <footer className="mt-10 text-gray-400 text-sm select-none">
        Desenvolvido por <a href="https://github.com/77lopesx" target="_blank" rel="noreferrer" className="underline hover:text-indigo-600">77lopesx</a>
      </footer>
    </div>
  );
}
