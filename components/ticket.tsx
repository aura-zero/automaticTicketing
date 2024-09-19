import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Binoculars, Calendar, Clock, UserIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

type Museum = {
  name: string;
  id: string;
};

type EntryPass = {
  id: string;
  passType: "OneTime" | "Weekly" | "Monthly";
  museumId: string;
  eventId: string | null;
  entryPassGroupId: string;
  museum: Museum;
  validFrom: string;
  validTo: string;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const generateQRCodeValue = (entryPass: EntryPass) => {
  return `${entryPass.id}-${entryPass.museumId}-${entryPass.validFrom}-${entryPass.validTo}`;
};

export const RenderTicketPreview: React.FC<{ entryPasses: EntryPass[] }> = ({
  entryPasses,
}) => {
  return (
    <div className="grid gap-10">
      {entryPasses.map((entryPass) => (
        <Card
          key={entryPass.id}
          className="w-full max-w-4xl bg-[#8b4e2f] rounded-3xl overflow-hidden shadow-2xl"
        >
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                <img
                  src="https://th.bing.com/th/id/OIP.2GkIzddKMrDhWeiOhYa4wgHaE5?rs=1&pid=ImgDetMain"
                  alt="Museum Artwork"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-between bg-gradient-to-b from-[#8b4e2f] to-[#5d3422]">
                <div>
                  <CardTitle className="text-3xl md:text-4xl font-serif text-white mb-2">
                    {entryPass.museum.name}
                  </CardTitle>
                  <CardDescription className="text-2xl md:text-3xl font-serif text-white mb-4">
                    {formatDate(entryPass.validFrom)}
                  </CardDescription>
                  <Badge
                    variant="secondary"
                    className="text-xl text-[#e8c7b6] mb-6"
                  >
                    {entryPass.passType} Pass
                  </Badge>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                  <div className="text-white text-base md:text-lg space-y-4 mb-4 md:mb-0">
                    <p className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Date: {formatDate(entryPass.validFrom)}</span>
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>
                        Time: {formatTime(entryPass.validFrom)} -{" "}
                        {formatTime(entryPass.validTo)}
                      </span>
                    </p>
                    <p className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-2" />
                      <span>Pass ID: {entryPass.id}</span>
                    </p>
                    <p className="flex items-center">
                      <Binoculars className="w-4 h-4 mr-2" />
                      <span>Museum ID: {entryPass.museumId}</span>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <QRCodeSVG
                      value={generateQRCodeValue(entryPass)}
                      size={100}
                      bgColor={"#ffffff"}
                      fgColor={"#8b4e2f"}
                      level={"M"}
                      includeMargin={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
