import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const initialMessages = [
  {
    id: 2,
    message: "This UI is super cool 😍",
    date: "5/24/2025",
    time: "08:15 PM",
  },
  {
    id: 3,
    message: "Loving the draggable cards!",
    date: "5/24/2025",
    time: "02:40 PM",
  },
  {
    id: 4,
    name: "Gobinda",
    role: "Admin",
    message: "Keep your comments kind and creative! ❤️",
    date: "5/23/2025",
    time: "11:11 AM",
  },
  {
    id: 5,
    message: "Nice work team 👏",
    date: "5/22/2025",
    time: "04:04 PM",
  },
];

export default function AnonymousWall() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const boxRef = useRef(null);

  const handlePost = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      message: input,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([newMsg, ...messages]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-orange-400 mb-2 text-center">
          Anonymous Wall
        </h1>
        <p className="text-center mb-6">Share your thoughts anonymously</p>

        <div className="w-full flex justify-center mb-10">
          <div className="flex w-full max-w-2xl rounded-full bg-gray-800 px-6 py-3 border border-orange-500">
            <input
              type="text"
              className="flex-grow bg-transparent focus:outline-none "
              placeholder="Write something nice..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handlePost}
              className="text-orange-400 hover:text-orange-600"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>

        <div
          ref={boxRef}
          className="relative w-full h-[500px] border border-gray-700 rounded-4xl overflow-hidden p-4"
          style={{
            // backgroundImage: `url('/photorealistic-view-tree-nature-with-branches-trunk.jpg')`,
            // backgroundImage: `url('/digital-art-dark-cosmic-night-sky.jpg')`,
            // backgroundImage: `url('/brown-wooden-dock.jpg')`,
            backgroundImage: `url('/trees-evening-sunset.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          {messages.map((msg) => (
            <DraggableCard key={msg.id} message={msg} constraintRef={boxRef} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DraggableCard({ message, constraintRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const constraintBox = constraintRef.current;
    if (constraintBox) {
      const boxRect = constraintBox.getBoundingClientRect();
      const randomTop = Math.random() * (boxRect.height - 160); // leave space for card height
      const randomLeft = Math.random() * (boxRect.width - 280); // updated width space
      setPosition({ top: randomTop, left: randomLeft });
    }
  }, [constraintRef]);

  const gradientStyles = [
    "linear-gradient(135deg, rgba(255, 100, 98, 0.3), rgba(255, 177, 104, 0.1))",
    "linear-gradient(135deg, rgba(0, 204, 255, 0.3), rgba(146, 254, 157, 0.1))",
    "linear-gradient(135deg, rgba(123, 104, 238, 0.3), rgba(240, 128, 128, 0.1))",
    "linear-gradient(135deg, rgba(0, 191, 255, 0.3), rgba(135, 206, 235, 0.1))",
    "linear-gradient(135deg, rgba(144, 238, 144, 0.3), rgba(255, 255, 240, 0.1))",
    "linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(255, 255, 255, 0.1))",
  ];

  const isAdmin = message.name === "Gobinda" && message.role === "Admin";

  const [bgGradient] = useState(() =>
    isAdmin
      ? "linear-gradient(135deg, rgba(255,165,0,0.3), rgba(255,255,255,0.1))"
      : gradientStyles[Math.floor(Math.random() * gradientStyles.length)]
  );

  return (
    <motion.div
      drag
      dragConstraints={constraintRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.95 }}
      className="absolute p-3 w-[180px] md:w-[280px] cursor-grab rounded-xl shadow-2xl backdrop-blur-md border border-white/10"
      style={{
        top: position.top,
        left: position.left,
        background: bgGradient,
      }}
    >
      {message.name && (
        <p className="font-semibold text-xs md:text-sm text-white">
          {message.name}{" "}
          <span className="text-green-500 text-xs">• {message.role}</span>
        </p>
      )}
      <p className="mt-1 text-white text-sm md:text-base">{message.message}</p>
      <p className=" text-xs md:text-sm text-gray-300 mt-2">
        💬 {message.date} {message.time}
      </p>
    </motion.div>
  );
}
