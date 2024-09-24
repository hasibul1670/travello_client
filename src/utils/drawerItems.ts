import {VisaIcon} from "@/constants/icons";
import {Flight, Hotel, Mosque, Tour} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";

export const drawerItems = [
  {
    title: "Profile",
    path: `user/profile`,
    icon: PersonIcon,
  },
  {
    title: "Flight",
    path: `flight-booking`,
    icon: Flight,
  },
  {
    title: "Visa",
    path: `umrah-booking`,
    icon: VisaIcon,
  },
  {
    title: "Tour",
    path: `umrah-booking`,
    icon: Tour,
  },
  {
    title: "Hotel",
    path: `umrah-booking`,
    icon: Hotel,
  },
  {
    title: "Umrah",
    path: `umrah-booking`,
    icon: Mosque,
  },
];
