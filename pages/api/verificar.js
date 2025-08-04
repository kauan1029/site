export default function handler(req, res) {
  const { senha } = req.query;

  const transcripts = {
    "abc123": "/transcripts/abc123.html",
    "xyz789": "/transcripts/xyz789.html"
  };

  if (transcripts[senha]) {
    res.status(200).json({ link: transcripts[senha] });
  } else {
    res.status(401).json({ error: "Senha incorreta" });
  }
}
