import EventTicket from "@/components/event-tickets";
import React from "react";
import { RenderTicketPreview } from "@/components/ticket";

const dummyEntryPasses = [
  {
    id: "EP001",
    passType: "OneTime",
    museumId: "MUS001",
    eventId: null,
    entryPassGroupId: "EPG001",
    museum: {
      name: "National Museum of Art",
      id: "MUS001",
    },
    validFrom: "2023-12-15T10:00:00Z",
    validTo: "2023-12-15T18:00:00Z",
  },
  {
    id: "EP002",
    passType: "Weekly",
    museumId: "MUS002",
    eventId: "EVT001",
    entryPassGroupId: "EPG002",
    museum: {
      name: "Science and Technology Museum",
      id: "MUS002",
    },
    validFrom: "2023-12-18T09:00:00Z",
    validTo: "2023-12-24T17:00:00Z",
  },
  {
    id: "EP003",
    passType: "Monthly",
    museumId: "MUS003",
    eventId: null,
    entryPassGroupId: "EPG003",
    museum: {
      name: "Natural History Museum",
      id: "MUS003",
    },
    validFrom: "2024-01-01T08:00:00Z",
    validTo: "2024-01-31T20:00:00Z",
  },
];

export default function TicketsPreview() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Tickets</h1>
      <RenderTicketPreview entryPasses={dummyEntryPasses} />
    </div>
  );
}
