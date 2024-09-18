"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-300 min-h-screen">
      <div className="relative h-screen">
        <img
          src="https://picsum.photos/1200/800"
          alt="Scenic train journey through mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <header
            className={`sticky top-0 z-50 px-4 py-6 transition-colors duration-300 ${
              isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
          >
            <div className="container mx-auto flex justify-between items-center">
              <h1
                className={`text-3xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                INDIAN HERITAGE MUSEUM
              </h1>
              <nav className="flex space-x-2">
                {["Home", "Visit", "Museum", "Study", "Contact"].map((item) => (
                  <Button
                    key={item}
                    variant={item === "Study" ? "default" : "ghost"}
                    className={`rounded-full transition-colors duration-300 ${
                      item === "Study"
                        ? "bg-green-700 hover:bg-green-600 text-white"
                        : isScrolled
                        ? "text-black hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </div>
          </header>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h3 className="text-4xl font-bold mb-4">
                Upcoming Event: Royal Kings Of India
              </h3>
              <p className="text-xl mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                doloremque vero, sequi quam repellat dignissimos maxime laborum
                cum labore. Harum expedita obcaecati exercitationem?
              </p>
              <Button
                size="lg"
                className="rounded-full bg-white text-green-800 hover:bg-green-100"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Discover the Rich Heritage of India
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Immerse yourself in the cultural beauty of India at India Museum
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white text-green-800 hover:bg-green-100"
          >
            Plan Your Visit
          </Button>
        </section>

        <section className="mb-16 bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="relative">
            <img
              src="https://picsum.photos/1200/400"
              alt="Upcoming Event: Indian Royal Gala"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <h3 className="text-4xl font-bold mb-4">
                  Upcoming Event: Royal Kings Of India
                </h3>
                <p className="text-xl mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error doloremque vero, sequi quam repellat dignissimos maxime
                  laborum cum labore. Harum expedita obcaecati exercitationem?
                </p>
                <Button
                  size="lg"
                  className="rounded-full bg-white text-green-800 hover:bg-green-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 pr-8">
            <img
              src="https://picsum.photos/600/400"
              alt="TMS Interface"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">What is TMS?</h1>
            <p className="mb-4">
              TMS is a revolutionary Chatbot-Based Museum Ticketing System that
              simplifies the ticketing process for museums and their visitors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Chatbot Ticketing</strong>
                  <p>
                    An AI-driven chatbot that handles ticket bookings and
                    inquiries seamlessly.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Integrated Payment Gateway</strong>
                  <p>
                    A secure payment system that ensures hassle-free
                    transactions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Data Insights</strong>
                  <p>
                    Analytics tools that provide valuable insights for smarter
                    decision-making.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose TMS?</h2>
            <p className="mb-4">
              TMS is designed to enhance the visitor experience by addressing
              common ticketing challenges faced by museums.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Eliminate Long Queues</strong>
                  <p>Reduce waiting times and improve visitor satisfaction.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Cost-Effective Solution</strong>
                  <p>Lower operational costs with automated ticketing.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Multilingual Support</strong>
                  <p>
                    Cater to a diverse audience with support for multiple
                    languages.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/500/400"
              alt="TMS in action"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-8">
            <img
              src="https://picsum.photos/600/400"
              alt="TMS devices"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">How to Use TMS?</h2>
            <p className="mb-4">
              Follow these simple steps to revolutionize your museum ticketing.
            </p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>
                <strong>Sign Up</strong>
                <p>Create an account to access TMS features.</p>
              </li>
              <li>
                <strong>Integrate with Your Museum</strong>
                <p>Connect TMS with your existing systems.</p>
              </li>
              <li>
                <strong>Launch the Chatbot</strong>
                <p>Deploy the chatbot for ticketing and visitor inquiries.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Guided Tours",
              description: "Discover hidden stories with our expert guides",
            },
            {
              title: "Cultural Workshops",
              description: "Immerse yourself in traditional Indian arts",
            },
            {
              title: "Virtual Experiences",
              description: "Explore the museum from anywhere in the world",
            },
            {
              title: "Educational Programs",
              description: "Engaging activities for schools and families",
            },
            {
              title: "Conservation Efforts",
              description:
                "Learn about our work in preserving cultural heritage",
            },
            {
              title: "Special Exhibitions",
              description: "Rotating displays of unique artifacts and artworks",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-90 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
                <Button variant="link" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Our Museums</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {[
                {
                  name: "Royal Artifacts Gallery",
                  image: "https://picsum.photos/800/400?random=1",
                },
                {
                  name: "Traditional Arts Museum",
                  image: "https://picsum.photos/800/400?random=2",
                },
                {
                  name: "Indian Cultural Center",
                  image: "https://picsum.photos/800/400?random=3",
                },
                {
                  name: "Historical Archives",
                  image: "https://picsum.photos/800/400?random=4",
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

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">
            Support Our Mission
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative rounded-lg overflow-hidden transform md:translate-y-8">
              <img
                src="https://picsum.photos/600/400?random=5"
                alt="Donate"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h4 className="text-2xl font-bold mb-4">Donate</h4>
                  <p className="mb-4">
                    Help us preserve and share Indian cultural heritage for
                    future generations.
                  </p>
                  <Button className="rounded-full">Make a Donation</Button>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden transform md:-translate-y-8">
              <img
                src="https://picsum.photos/600/400?random=6"
                alt="Volunteer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h4 className="text-2xl font-bold mb-4">Volunteer</h4>
                  <p className="mb-4">
                    Join our team and contribute your skills to support our
                    cultural mission.
                  </p>
                  <Button className="rounded-full">Get Involved</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-opacity-90 rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Batik Workshop",
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
                className="bg-green-50 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold mb-2">{event.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{event.date}</p>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 text-center text-black">
          <h3 className="text-3xl font-bold text-black mb-4">
            Become a Member
          </h3>
          <p className="text-xl text-black mb-8">
            Enjoy exclusive access, special events, and support the preservation
            of Indian culture.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white text-green-800 hover:bg-green-100"
          >
            Join Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">INDIAN HERITAGE MUSEUM</h4>
            <p>Indian Heritage Museum,New Delhi,India,736101</p>
            <p>Open Tuesday - Sunday, 8:30 AM - 4:00 PM</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-green-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <Button
                  key={social}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-green-300"
                >
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4">
        <Button
          size="lg"
          className="rounded-full bg-white text-green-800 hover:bg-green-100 shadow-lg"
        >
          <MessageCircle className="mr-2" />
          Chat with Us
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
