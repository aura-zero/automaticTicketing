"use client";

import { useState } from "react";

interface TicketProps {
  eventName: string;
  date: string;
  price: number;
  code: string;
  imageUrl: string;
}

const Ticket: React.FC<TicketProps> = ({
  eventName,
  date,
  price,
  code,
  imageUrl,
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-black text-white border-4 border-gold rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="p-4 flex">
          <div className="w-2/3 pr-4 border-r-2 border-gold">
            <h2 className="text-2xl font-bold mb-2">{eventName}</h2>
            <p className="text-sm mb-2">{date}</p>
            <div className="text-3xl font-bold mb-2">${price}</div>
            <p className="text-xs">CODE: {code}</p>
          </div>
          <div className="w-1/3 pl-4 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold">
              <img
                src={imageUrl}
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-gold text-white text-center py-2 text-sm font-bold">
          ALL NIGHT PARTY & DANCE FOR LIFE
        </div>
      </div>
    </div>
  );
};

const TicketGallery: React.FC = () => {
  const [tickets] = useState<TicketProps[]>([
    {
      eventName: "OUR QUEEN EVENT",
      date: "12 FRIDAY JUN 2023",
      price: 100,
      code: "105 080 808",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      eventName: "KING'S BALL",
      date: "15 MONDAY JUL 2023",
      price: 150,
      code: "106 090 909",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      eventName: "ROYAL GALA",
      date: "20 SATURDAY AUG 2023",
      price: 200,
      code: "107 070 707",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
  ]);

  return (
    <div className="min-h-screen bg-wood bg-cover p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Event Tickets
        </h1>
        <div className="space-y-12">
          {tickets.map((ticket, index) => (
            <Ticket key={index} {...ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function EventTicket() {
  return <TicketGallery />;
}
