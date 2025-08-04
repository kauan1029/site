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
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <div
        className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl max-w-lg w-full p-10
          border border-white border-opacity-20"
      >
        <h1 className="text-4xl font-bold text-white mb-8 tracking-wide select-none">
          🔒 Acesso ao Transcript
        </h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Digite a senha que você recebeu no privado para acessar seu transcript.
        </p>

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Sua senha"
          className="w-full px-6 py-4 rounded-xl bg-white bg-opacity-20 placeholder-white placeholder-opacity-60
            border border-white border-opacity-30 text-white text-lg
            focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {erro && (
          <p className="mt-3 text-red-400 text-sm font-medium select-none" role="alert">
            {erro}
          </p>
        )}

        <button
          onClick={verificarSenha}
          className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700
            text-white font-semibold rounded-xl shadow-lg
            transition duration-300 ease-in-out
            hover:brightness-110 active:brightness-90"
        >
          Acessar
        </button>
      </div>

      <footer className="mt-10 text-gray-400 text-sm select-none">
        Desenvolvido por{" "}
        <a
          href="https://github.com/77lopesx"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-indigo-300"
        >
          77lopesx
        </a>
      </footer>
    </div>
  );
}
