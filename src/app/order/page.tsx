"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../Components/Header";

const menuItems = [
  {
    id: 1,
    name: "Martabak Indomie Original",
    description: "Martabak dengan mi Indomie, telur, dan bumbu spesial.",
    price: 25000,
    image: "/logo_hero.jpeg",
  },
  {
    id: 2,
    name: "Martabak Indomie Keju",
    description:
      "Martabak dengan mi Indomie, telur, keju parut, dan bumbu spesial.",
    price: 30000,
    image: "/menu_1.png",
  },
  {
    id: 3,
    name: "Martabak Indomie Spesial",
    description:
      "Martabak dengan mi Indomie, telur, daging cincang, sayuran, dan bumbu spesial.",
    price: 35000,
    image: "/menu_2.png",
  },
  {
    id: 4,
    name: "Martabak Indomie Sosis",
    description:
      "Martabak dengan mi Indomie, telur, daging cincang, sayuran, dan bumbu spesial.",
    price: 25000,
    image: "/menu_3.png",
  },
  // tambahkan menu lainnya sesuai kebutuhan
];

const OrderPage: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc: any, item: any) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id: any, value: any) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const addToCart = (item: any) => {
    const existingItem = cart.find((cartItem: any) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantities[item.id] }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: quantities[item.id] }]);
    }
  };

  const removeFromCart = (index: any) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  };

  const handleOrder = () => {
    const orderDetails = cart.map(item => `- ${item.quantity} ${item.name}`).join('%0A');
    const whatsappUrl = `https://wa.me/6281323230401?text=Halo%20admin%20miebak,%20saya%20mau%20order:%0A${orderDetails}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Header />
      <main className="container mx-auto py-8 flex">
        <div className="w-2/3 pr-8">
          <h2 className="text-2xl font-bold mb-4">Pilih Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-lg h-48 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-gray-700 font-bold mb-4">Rp {item.price}</p>
                <div className="flex items-center mb-4">
                  <label htmlFor={`quantity-${item.id}`} className="mr-2">Jumlah:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={quantities[item.id]}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded"
                  />
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                >
                  Tambah ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8 z-40 m-5">
            <div className="flex-grow overflow-auto">
              <h2 className="text-2xl font-bold mb-4">Keranjang</h2>
              {cart.length === 0 ? (
                <p className="text-gray-700">Keranjang kosong.</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-700">Rp {item.price}</p>
                        <p className="text-gray-700">Jumlah: {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Hapus
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="bg-white p-4 mt-4 sticky bottom-0 z-50">
              <h3 className="text-xl font-bold">Total: Rp {calculateTotal()}</h3>
              <button disabled={cart.length === 0} className={`bg-green-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-green-600 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleOrder()}>
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderPage;
