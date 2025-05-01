export default function handler(req, res) {
  const { code } = req.body;
  if (code === '123456') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
