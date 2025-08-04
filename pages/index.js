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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🔒 Acesso ao Transcript
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Digite a senha que você recebeu no privado para acessar seu transcript.
        </p>

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition"
        />

        {erro && (
          <p className="mt-2 text-red-500 text-sm select-none" role="alert">
            {erro}
          </p>
        )}

        <button
          onClick={verificarSenha}
          className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Acessar
        </button>
      </div>
    </div>
  );
}
