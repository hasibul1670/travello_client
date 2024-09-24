"use client";
import config from "@/config/config";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FaMosque, FaUmbrellaBeach} from "react-icons/fa";
import {GiPassport} from "react-icons/gi";
import {MdFlight} from "react-icons/md";
import {RiHotelBedFill} from "react-icons/ri";
import FLightSearchBar from "../Flight/FlightSearchBar";
import HotelSearchBar from "../Hotel/hotelSearchBar";
import TourSearchBar from "../Tour/TourSearchBar";
import UmrahPackage from "../UmrahPackage/UmrahPackage";
import VisaSearchBar from "../Visa/VisaSearchBar";
import { Container } from "@/components/SharedComponents/Container";


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SearchPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const banner = "6e19ac39-bfa4-4662-94e9-d81a465548a1.webp";
  // const banner = "93a523cd-2218-40a6-8afc-49a1374428ff.webp";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${config.blobUrl + banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "95vh",
        width: "100vw", // Use viewport width for full-width effect
        maxWidth: "100%", // Ensures it does not exceed parent container width
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Box className="py-[33vh] flex justify-center">
          <div className="bg-white w-4/5 shadow-xl rounded-xl   ">
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
              sx={{
                "& .MuiTab-root": {
                  color: "black",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "darkBlue",
                  minHeight: 4,
                },
                "& .Mui-selected": {
                  color: "darkBlue",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab icon={<MdFlight style={{fontSize: 25}} />} label="Flight " {...a11yProps(0)} />
              <Tab
                icon={<RiHotelBedFill style={{fontSize: 25}} />}
                label="Hotel "
                {...a11yProps(1)}
              />
              <Tab
                icon={<FaUmbrellaBeach style={{fontSize: 25}} />}
                label="Tour "
                {...a11yProps(2)}
              />
              <Tab icon={<GiPassport style={{fontSize: 25}} />} label="Visa" {...a11yProps(3)} />
              <Tab
                icon={<FaMosque style={{fontSize: 25}} />}
                label="Umrah Package"
                {...a11yProps(4)}
              />
            </Tabs>

            <TabPanel value={value} index={0} dir={theme.direction}>
              <FLightSearchBar />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <HotelSearchBar />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <TourSearchBar />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <VisaSearchBar />
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <UmrahPackage />
            </TabPanel>
          </div>
        </Box>
      </Container>
    </div>
  );
}
