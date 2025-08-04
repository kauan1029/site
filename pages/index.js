import { useState } from "react";

export default function Home() {
  const [senha, setSenha] = useState("");

  const verificarSenha = async () => {
    const res = await fetch(`/api/verificar?senha=${senha}`);
    if (res.ok) {
      const data = await res.json();
      window.location.href = data.link;
    } else {
      alert("Senha incorreta!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white font-sans p-4">
      <h1 className="text-3xl font-bold mb-4">🔒 Acesso ao Transcript</h1>
      <p className="mb-4 text-center">Digite a senha que você recebeu no privado para acessar seu transcript.</p>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="p-2 rounded text-black w-64"
        placeholder="Senha"
      />
      <button
        onClick={verificarSenha}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-bold"
      >
        Acessar
      </button>
    </div>
  );
}
