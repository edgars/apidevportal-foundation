import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "museus-apis/redocly-museum-api",
    },
    {
      type: "category",
      label: "Operations",
      link: {
        type: "doc",
        id: "museus-apis/operations",
      },
      items: [
        {
          type: "doc",
          id: "museus-apis/get-museum-hours",
          label: "Get museum hours",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      link: {
        type: "doc",
        id: "museus-apis/events",
      },
      items: [
        {
          type: "doc",
          id: "museus-apis/create-special-event",
          label: "Create special events",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "museus-apis/list-special-events",
          label: "List special events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "museus-apis/get-special-event",
          label: "Get special event",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "museus-apis/update-special-event",
          label: "Update special event",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "museus-apis/delete-special-event",
          label: "Delete special event",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Tickets",
      link: {
        type: "doc",
        id: "museus-apis/tickets",
      },
      items: [
        {
          type: "doc",
          id: "museus-apis/buy-museum-tickets",
          label: "Buy museum tickets",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "museus-apis/get-ticket-code",
          label: "Get ticket QR code",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "museus-apis/schemas/tickettype",
          label: "TicketType",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/date",
          label: "Date",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/email",
          label: "Email",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/buymuseumtickets",
          label: "BuyMuseumTickets",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/ticketmessage",
          label: "TicketMessage",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/ticketid",
          label: "TicketId",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/ticketconfirmation",
          label: "TicketConfirmation",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/ticket",
          label: "Ticket",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/museumticketsconfirmation",
          label: "MuseumTicketsConfirmation",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/ticketcodeimage",
          label: "TicketCodeImage",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/museumhours",
          label: "MuseumHours",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/museumdailyhours",
          label: "MuseumDailyHours",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/eventid",
          label: "EventId",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/eventname",
          label: "EventName",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/eventlocation",
          label: "EventLocation",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/eventdescription",
          label: "EventDescription",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/eventdates",
          label: "EventDates",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/eventprice",
          label: "EventPrice",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/specialeventfields",
          label: "SpecialEventFields",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/specialevent",
          label: "SpecialEvent",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/specialeventcollection",
          label: "SpecialEventCollection",
          className: "schema",
        },
        {
          type: "doc",
          id: "museus-apis/schemas/error",
          label: "Error",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
