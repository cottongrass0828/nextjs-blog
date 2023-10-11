// req = HTTP 傳入之訊息，res = HTTP 伺服器回應
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }