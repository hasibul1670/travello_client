"use client";
import {Box, useTheme} from "@mui/material";
import {DiscoverBangladeshCard} from "./DiscoverBangladeshCard";

const discoverBd = [
  {
    id: 1,
    title: "Chittagong",
    images: [
      "8ff02a9a-33b3-4cb4-9e46-4e5bc384b732.webp",
      "8ff02a9a-33b3-4cb4-9e46-4e5bc384b732.webp",
      "76e46457-3117-45f1-9d10-4b0e7c16abd3.webp",
      "8ff02a9a-33b3-4cb4-9e46-4e5bc384b732.webp",
      "76e46457-3117-45f1-9d10-4b0e7c16abd3.webp",
    ],
    link: "/",
  },
  {
    id: 2,
    title: "Cox Bazer",
    images: [
      "627bce3f-5893-48f1-84b2-c9bf53c2d7c2.webp",
      "48177978-d592-4ceb-90d2-1b8cc0cffb55.webp",
      "627bce3f-5893-48f1-84b2-c9bf53c2d7c2.webp",
      "48177978-d592-4ceb-90d2-1b8cc0cffb55.webp",
      "48177978-d592-4ceb-90d2-1b8cc0cffb55.webp",
    ],
    link: "/",
  },
  {
    id: 3,
    title: "Sylhet",
    images: [
      "07fbbc23-de0f-4fba-9ab9-bc39aeeb88d9.webp",
      "dc4e23e9-6296-4fa3-8660-583485b671eb.webp",
      "8d616f7e-aa14-4c44-a3d9-a1ccfd3cb482.webp",
      "dc4e23e9-6296-4fa3-8660-583485b671eb.webp",
      "8d616f7e-aa14-4c44-a3d9-a1ccfd3cb482.webp",
    ],
    link: "/",
  },
  {
    id: 4,
    title: "Sundarbans",
    images: [
      "3dd87cf1-c96a-4621-954f-51de070ab9d6.webp",
      "077b4abb-6c3f-4274-99f6-4140dc366d0c.webp",
      "11f8e74a-0fe2-4de4-8a65-0c0dcc5eb932.webp",
      "077b4abb-6c3f-4274-99f6-4140dc366d0c.webp",
      "11f8e74a-0fe2-4de4-8a65-0c0dcc5eb932.webp",
    ],
    link: "/",
  },
];

const DiscoverBangladesh = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
      className="bg-palette.background.paper  text-primary"
    >
      <div className="h-[35rem] lg:px-10 mb-10 ">
        <div className="pt-8  w-1/2 ">
          <p className="text-xl font-bold">Discover Bangladesh </p>
          <p>
            Prepare to experience Bangladesh rich culture & explore the majestic beautiful CoxBazar,
            Sylhet, Bandarban, Sajek Valley, Rangamati etc. Plan your trip now!
          </p>
        </div>
        <div className="pt-5 w-full h-[70vh] flex">
          {discoverBd.map((deal) => (
            <DiscoverBangladeshCard location={deal} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default DiscoverBangladesh;
