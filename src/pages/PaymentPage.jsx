import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [amount, setAmount] = useState(150000); // Misalnya 150000

  const handlePayment = async () => {
    try {
      // Kirim request ke backend untuk mendapatkan token transaksi
      const response = await axios.post('http://localhost:5000/create-transaction', {
        totalAmount: amount,
      });

      const snapToken = response.data.token; // Token dari response backend

      // Memulai pembayaran menggunakan Snap SDK
      window.snap.pay(snapToken, {
        onSuccess: function(result) {
          alert('Transaksi berhasil! ' + JSON.stringify(result));
        },
        onPending: function(result) {
          alert('Transaksi masih pending: ' + JSON.stringify(result));
        },
        onError: function(result) {
          alert('Terjadi kesalahan: ' + JSON.stringify(result));
        },
        onClose: function() {
          alert('Pembayaran dibatalkan');
        },
      });
    } catch (error) {
      console.error('Error making payment:', error);
      alert('Gagal membuat transaksi');
    }
  };

  return (
    <div>
      <h1>Top Up Game</h1>
      <p>Total Pembayaran: Rp {amount}</p>
      <button onClick={handlePayment}>Bayar dengan Midtrans</button>
    </div>
  );
};

export default PaymentPage;
