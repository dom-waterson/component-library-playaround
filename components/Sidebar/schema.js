import React from "react";
import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper, IoMdPeople, IoMdHelpCircle } from "react-icons/io";

export const schema = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiFillHome />,

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,

    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
      },
      {
        title: "Message 2",
        path: "/messages/message2",
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
  },
];
