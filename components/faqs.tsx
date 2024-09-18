"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageSquare,
  Clock,
  DollarSign,
  BarChart,
  Globe,
  ShieldCheck,
  Languages,
  Zap,
  CreditCard,
  Calendar,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqData = [
  {
    heading: "Online Chatbot Ticketing System",
    questions: [
      {
        question:
          "What is the Online Chatbot based ticketing system for museums?",
        answer:
          "It's an efficient and responsive multilingual chatbot system designed to handle all types of bookings, from gate entry to shows, in museums. It includes integrated payment gateways for a fully automated process and provides analytics for improved decision-making.",
        icon: <MessageSquare className="w-5 h-5 text-primary" />,
      },
      {
        question: "How does the chatbot improve the visitor experience?",
        answer:
          "The chatbot enhances the visitor experience by eliminating long queues, reducing wait times, minimizing errors in ticket issuance, and providing a convenient 24/7 booking option. It also offers multilingual support to cater to a diverse audience.",
        icon: <Clock className="w-5 h-5 text-primary" />,
      },
      {
        question: "Can visitors book tickets for specific time slots?",
        answer:
          "Yes, the chatbot allows visitors to book tickets for specific time slots, helping to manage crowd flow and enhance the overall museum experience. This feature is particularly useful for popular exhibits or during peak seasons.",
        icon: <Calendar className="w-5 h-5 text-primary" />,
      },
    ],
  },
  {
    heading: "Key Benefits",
    questions: [
      {
        question: "How does the chatbot improve customer service?",
        answer:
          "The chatbot provides instant responses to visitor queries, offers 24/7 availability, and ensures consistent and accurate information, significantly enhancing the overall customer service experience.",
        icon: <Zap className="w-5 h-5 text-primary" />,
      },
      {
        question: "Is the chatbot system cost-effective?",
        answer:
          "Yes, the chatbot system is a cost-effective solution. It reduces the need for human staff to handle routine inquiries and bookings, lowering operational costs while maintaining high-quality service.",
        icon: <DollarSign className="w-5 h-5 text-primary" />,
      },
      {
        question: "What kind of data analysis does the system provide?",
        answer:
          "The system collects and analyzes data on visitor preferences, peak times, popular exhibits, and booking patterns. This valuable information aids in more efficient decision-making processes for museum management.",
        icon: <BarChart className="w-5 h-5 text-primary" />,
      },
      {
        question: "How does the chatbot enhance marketing and promotion?",
        answer:
          "The chatbot can be programmed to provide personalized recommendations, inform visitors about upcoming events or exhibitions, and offer special promotions. This targeted approach helps improve visitor engagement and potentially increases ticket sales.",
        icon: <Globe className="w-5 h-5 text-primary" />,
      },
    ],
  },
  {
    heading: "Technical Features",
    questions: [
      {
        question: "How does the system handle high volumes of bookings?",
        answer:
          "The chatbot efficiently manages high volumes of bookings simultaneously, eliminating queues and wait times even during peak hours, weekends, or special exhibitions.",
        icon: <Globe className="w-5 h-5 text-primary" />,
      },
      {
        question: "How does the chatbot reduce human error?",
        answer:
          "By automating the booking process, the chatbot minimizes errors such as incorrect ticket issuance, double bookings, or lost records, ensuring a more reliable and accurate ticketing system.",
        icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      },
      {
        question: "What languages does the chatbot support?",
        answer:
          "The chatbot offers multilingual support, catering to a diverse range of visitors and enhancing accessibility for international tourists.",
        icon: <Languages className="w-5 h-5 text-primary" />,
      },
      {
        question: "How is the payment process integrated?",
        answer:
          "The chatbot seamlessly integrates with secure payment gateways, allowing visitors to complete their transactions within the chat interface. This integration supports various payment methods, ensuring a smooth and secure booking process.",
        icon: <CreditCard className="w-5 h-5 text-primary" />,
      },
      {
        question: "Is the chatbot accessible on mobile devices?",
        answer:
          "Yes, the chatbot is designed to be fully responsive and accessible on various devices, including smartphones and tablets. This ensures visitors can book tickets and get information on-the-go.",
        icon: <Smartphone className="w-5 h-5 text-primary" />,
      },
    ],
  },
];

export default function Component() {
  const [activeIndices, setActiveIndices] = useState<
    Record<string, number | null>
  >({});

  const toggleAccordion = (heading: string, index: number) => {
    setActiveIndices((prev) => ({
      ...prev,
      [heading]: prev[heading] === index ? null : index,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Museum Chatbot FAQ
        </h1>
        <div className="space-y-8">
          {faqData.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <button
                        className="w-full text-left focus:outline-none"
                        onClick={() => toggleAccordion(section.heading, index)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900 flex items-center">
                            <motion.span
                              initial={{ rotate: 0 }}
                              animate={{
                                rotate:
                                  activeIndices[section.heading] === index
                                    ? 360
                                    : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="mr-3"
                            >
                              {item.icon}
                            </motion.span>
                            {item.question}
                          </span>
                          <motion.span
                            animate={{
                              rotate:
                                activeIndices[section.heading] === index
                                  ? 180
                                  : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </motion.span>
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {activeIndices[section.heading] === index && (
                          <motion.div
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: {
                                opacity: 1,
                                height: "auto",
                                marginTop: "1rem",
                              },
                              collapsed: {
                                opacity: 0,
                                height: 0,
                                marginTop: "0",
                              },
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <p className="text-gray-700">{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: faqData.length * 0.1 }}
          className="mt-8"
        >
          <Link href="/chatbot">
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Museum Chatbot
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
