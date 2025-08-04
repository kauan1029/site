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
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] flex flex-col justify-center items-center px-6">
      <div className="bg-gray-800 bg-opacity-90 max-w-md w-full rounded-2xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-4xl font-thin text-gray-200 mb-8 select-none tracking-wide">
          🔒 Acesso ao Transcript
        </h1>
        <p className="text-gray-400 mb-8 text-center text-base leading-relaxed">
          Digite a senha que você recebeu no privado para acessar seu transcript.
        </p>

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Sua senha"
          className="w-full px-5 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {erro && (
          <p className="mt-3 text-red-500 text-sm font-light select-none" role="alert">
            {erro}
          </p>
        )}

        <button
          onClick={verificarSenha}
          className="mt-8 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Acessar
        </button>
      </div>

      <footer className="mt-10 text-gray-500 text-sm select-none">
        Desenvolvido por{" "}
        <a
          href="https://github.com/77lopesx"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-indigo-400"
        >
          77lopesx
        </a>
      </footer>
    </div>
  );
}
