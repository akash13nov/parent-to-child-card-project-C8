import React from "react";
import Card from "./components/Card";

const App = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      heading: "Wireless Headphones",
      title: "Noise Cancelling Pro",
      description:
        "High-quality sound with active noise cancellation for immersive listening.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      heading: "Smart Watch",
      title: "Fitness & Health Tracker",
      description:
        "Track heart rate, steps, workouts, and stay connected on the go.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      heading: "Running Shoes",
      title: "Ultra Comfort Series",
      description:
        "Lightweight, breathable shoes designed for everyday runs and workouts.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "DSLR Camera",
      title: "Professional Photography",
      description:
        "Capture stunning photos and videos with crystal-clear precision.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
      heading: "Backpack",
      title: "Travel & Laptop Bag",
      description:
        "Durable backpack with multiple compartments for daily and travel use.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Sunglasses",
      title: "UV Protection Wear",
      description:
        "Stylish sunglasses offering complete UV protection and comfort.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1730692758355-56bcee31bcc4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Bluetooth Speaker",
      title: "Portable Sound Box",
      description: "Compact speaker delivering powerful sound with deep bass.",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Laptop",
      title: "High Performance Device",
      description:
        "Fast and reliable laptop for work, coding, and entertainment.",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
      heading: "Camera Lens",
      title: "50mm Prime Lens",
      description:
        "Sharp and lightweight lens ideal for portraits and low-light shots.",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
      heading: "Office Chair",
      title: "Ergonomic Comfort Chair",
      description:
        "Comfortable ergonomic chair designed for long working hours.",
    },
  ];

  return (
    <div className="bg-amber flex flex-wrap items-center justify-center gap-8 p-10">
      {products.map((product, index) => {
        return <Card key={index} product={product} />;
      })}
    </div>
  );
};

export default App;
