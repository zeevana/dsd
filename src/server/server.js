const express = require('express');
const midtransClient = require('midtrans-client');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const serverKey = 'YOUR_SERVER_KEY';  // Gantilah dengan Server Key Anda
const clientKey = 'YOUR_CLIENT_KEY';  // Gantilah dengan Client Key Anda

const snap = new midtransClient.Snap({
  isProduction: false, // Atur ke true jika sudah di mode produksi
  serverKey: serverKey,
});

app.post('/create-transaction', (req, res) => {
  const { totalAmount } = req.body;

  const parameter = {
    transaction_details: {
      order_id: `ORDER-${new Date().getTime()}`,
      gross_amount: totalAmount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: "Customer",
      last_name: "Name",
      email: "customer@example.com",
      phone: "+628123456789",
    },
  };

  snap.createTransaction(parameter)
    .then(transaction => {
      res.json(transaction); // Mengirimkan token transaksi
    })
    .catch(error => {
      console.error('Error creating transaction:', error);
      res.status(500).json({ error: 'Terjadi kesalahan saat membuat transaksi' });
    });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
