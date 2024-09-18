"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Ticket3D from "@/components/ui/3D-Ticket";
import { data } from "@/components/data";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const LandingPage = () => {
  const images = [
    "images/museumimages/image.png",
    "/images/museumimages/image1.png",
    "/images/museumimages/1.png",
    "/images/museumimages/2.png",
    "/images/museumimages/3.png",
    "/images/museumimages/4.png",
    "/images/museumimages/5.png",
  ];

  const words = `Explore the Journey through Centuries of art, culture, and history at the Indian Heritage Museum`;

  // Modified dummyContent to separate description and keyFeatures
  const dummyContent = [
    {
      title: data.locations[0].museums[0].name,
      description: data.locations[0].museums[0].description,
      keyFeatures: data.locations[0].museums[0].keyFeatures,
      badge: "data.locations[0].name[0]",
      image: `http://localhost:5173/${data.locations[0].museums[0].photos[3]}`,
    },
    {
      title: data.locations[1].museums[1].name,
      description: data.locations[1].museums[1].description,
      keyFeatures: data.locations[1].museums[1].keyFeatures,
      badge: "Payment Gateway",
      image: `http://localhost:5173/${data.locations[1].museums[1].photos[0]}`,
    },
    {
      title: data.locations[1].museums[2].name,
      description: data.locations[1].museums[2].description,
      keyFeatures: data.locations[1].museums[2].keyFeatures,
      badge: "Analytics",
      image: `http://localhost:5173/${data.locations[1].museums[2].photos[0]}`,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi, scrollNext]);

  return (
    <div>
      <ImagesSlider className="h-[60rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            <TextGenerateEffect
              className="text-white text-xl px-14"
              words={words}
            />
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 text-2xl hover:scale-110 ease-in-out duration-150">
            <span>Plan Your Visit →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <main id="test" className="container mx-auto px-4 py-8">
        <section>
          <h1 className="text-4xl text-center font-bold mb-4">
            Wanna Book Your Ticket?
            <Ticket3D imageSrc={"/images/ticket.png"} />
          </h1>
        </section>

        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 pr-8">
            <img
              src="https://picsum.photos/600/400"
              alt="AI-Powered Chatbot Interface"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              AI-Powered Ticketing System
            </h1>
            <p className="mb-4">
              Effortlessly handle ticket bookings with our AI-powered chatbot.
              Offering real-time answers, personalized recommendations, and
              seamless transactions, it’s designed to streamline operations and
              enhance the visitor experience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>AI Chatbot for Ticketing</strong>
                  <p>
                    An AI-driven chatbot that simplifies ticket bookings,
                    queries, and support for museum visitors.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Secure Payment Gateway</strong>
                  <p>
                    Integrated payment solutions to ensure smooth and secure
                    transactions for all bookings.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>24/7 Availability</strong>
                  <p>
                    Ensure round-the-clock service without any need for human
                    intervention, catering to visitors anytime.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Visitor Data Insights</strong>
                  <p>
                    Leverage data analytics to gain insights into visitor
                    behavior, improving future decision-making and operations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Chatbot Ticketing System?
            </h2>
            <p className="mb-4">
              Our system is designed to solve common challenges in museum
              ticketing, providing a faster, more efficient, and inclusive
              experience for all visitors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Reduce Wait Times</strong>
                  <p>
                    Minimize long queues by automating the booking process,
                    improving visitor satisfaction.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Cost-Effective Automation</strong>
                  <p>
                    Reduce staffing needs and operational costs with an
                    automated ticketing system.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>24/7 Ticketing Service</strong>
                  <p>
                    Offer visitors the convenience of booking tickets anytime,
                    without time restrictions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/500/400"
              alt="AI Chatbot in action"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-8">
            <img
              src="https://picsum.photos/600/400"
              alt="How Chatbot System Works"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Getting Started with Our Ticketing System
            </h2>
            <p className="mb-4">
              Follow these simple steps to integrate the AI-powered chatbot
              system into your museum.
            </p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>
                <strong>Register Your Museum</strong>
                <p>
                  Create an account and register your museum to access the
                  chatbot system.
                </p>
              </li>
              <li>
                <strong>System Integration</strong>
                <p>
                  Integrate the system with your existing ticketing
                  infrastructure.
                </p>
              </li>
              <li>
                <strong>Launch the Chatbot</strong>
                <p>
                  Deploy the chatbot for ticket bookings and visitor assistance.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {/* Fixed: Rendering description and keyFeatures separately */}
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>

                  <p className={twMerge("text-xl mb-4")}>{item.title}</p>

                  <div className="text-sm  prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <img
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    <p>{item.description}</p> {/* Description paragraph */}
                    <ul>
                      {" "}
                      {/* Key Features list */}
                      {item.keyFeatures.map((feature, featureIndex) => (
                        <li key={`feature-${featureIndex}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Our Museums</h3>
          <Carousel ref={emblaRef} className="w-full">
            <CarouselContent>
              {[
                {
                  name: data.locations[0].museums[2].name,
                  image: `http://localhost:5173/${data.locations[0].museums[2].photos[0]}`,
                },
                {
                  name: data.locations[1].museums[0].name,
                  image: `http://localhost:5173/${data.locations[1].museums[0].photos[0]}`,
                },
                {
                  name: data.locations[2].museums[0].name,
                  image: `http://localhost:5173/${data.locations[2].museums[0].photos[0]}`,
                },
                {
                  name: data.locations[3].museums[0].name,
                  image: `http://localhost:5173/${data.locations[3].museums[0].photos[0]}`,
                },
                {
                  name: data.locations[4].museums[0].name,
                  image: `http://localhost:5173/${data.locations[4].museums[0].photos[0]}`,
                },
                {
                  name: data.locations[4].museums[2].name,
                  image: `http://localhost:5173/${data.locations[4].museums[2].photos[0]}`,
                },
              ].map((museum, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={museum.image}
                      alt={museum.name}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h4 className="text-3xl font-bold text-white">
                        {museum.name}
                      </h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section id="test" className="mb-16">
          <h3 id="test" className="text-3xl font-bold text-black mb-8">
            Support Our Mission
          </h3>
          <div id="test" className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              id="test"
              className="relative rounded-lg overflow-hidden transform md:translate-y-8"
            >
              <img
                src="https://picsum.photos/600/400?random=5"
                alt="Donate"
                id="test"
                className="w-full h-80 object-cover"
              />
              <div
                id="test"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <div id="test" className="text-white text-center p-8">
                  <h4 id="test" className="text-2xl font-bold mb-4">
                    Donate
                  </h4>
                  <p id="test" className="mb-4">
                    Help us preserve and share Indian cultural heritage for
                    future generations.
                  </p>
                  <Button id="test" className="rounded-full">
                    Make a Donation
                  </Button>
                </div>
              </div>
            </div>
            <div
              id="test"
              className="relative rounded-lg overflow-hidden transform md:-translate-y-8"
            >
              <img
                src="https://picsum.photos/600/400?random=6"
                alt="Volunteer"
                id="test"
                className="w-full h-80 object-cover"
              />
              <div
                id="test"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <div id="test" className="text-white text-center p-8">
                  <h4 id="test" className="text-2xl font-bold mb-4">
                    Volunteer
                  </h4>
                  <p id="test" className="mb-4">
                    Join our team and contribute your skills to support our
                    cultural mission.
                  </p>
                  <Button id="test" className="rounded-full">
                    Get Involved
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="test" className="mb-16 bg-opacity-90 rounded-lg p-8">
          <h3 id="test" className="text-3xl font-bold mb-8">
            Upcoming Events
          </h3>
          <div id="test" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classical Dance Performance",
                date: "June 15, 2024",
                image: "https://picsum.photos/400/200?random=7",
              },
              {
                title: "Gamelan Performance",
                date: "June 22, 2024",
                image: "https://picsum.photos/400/200?random=8",
              },
              {
                title: "Wayang Kulit Show",
                date: "July 1, 2024",
                image: "https://picsum.photos/400/200?random=9",
              },
            ].map((event, index) => (
              <div
                key={index}
                id="test"
                className="bg-green-50 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  id="test"
                  className="w-full h-48 object-cover"
                />
                <div id="test" className="p-4">
                  <h4 id="test" className="font-bold mb-2">
                    {event.title}
                  </h4>
                  <p id="test" className="text-sm text-gray-600 mb-4">
                    {event.date}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    id="test"
                    className="rounded-full"
                  >
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="test" className="mb-16 text-center text-black">
          <h3 id="test" className="text-3xl font-bold text-black mb-4">
            Become a Member
          </h3>
          <p id="test" className="text-xl text-black mb-8">
            Enjoy exclusive access, special events, and support the preservation
            of Indian culture.
          </p>
          <Button
            size="lg"
            id="test"
            className="rounded-full bg-white text-green-800 hover:bg-green-100"
          >
            Join Now
          </Button>
        </section>
      </main>

      <footer id="test" className="bg-gray-800 text-white py-8">
        <div
          id="test"
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h4 id="test" className="font-bold text-lg mb-4">
              INDIAN HERITAGE MUSEUM
            </h4>
            <p>Indian Heritage Museum,New Delhi,India,736101</p>
            <p>Open Tuesday - Sunday, 8:30 AM - 4:00 PM</p>
          </div>
          <div>
            <h4 id="test" className="font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  Education
                </a>
              </li>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 id="test" className="font-bold text-lg mb-4">
              Connect With Us
            </h4>
            <div id="test" className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <Button
                  key={social}
                  variant="ghost"
                  size="sm"
                  id="test"
                  className="text-white hover:text-green-300"
                >
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div id="test" className="fixed bottom-4 right-4">
        <Button
          size="lg"
          id="test"
          className="rounded-full bg-white text-green-800 hover:bg-green-100 shadow-lg"
        >
          <MessageCircle id="test" className="mr-2" />
          Chat with Us
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
