import {Box, List, Stack, Typography} from "@mui/material";
import Link from "next/link";

import {drawerItems} from "@/utils/drawerItems";
import {useState} from "react";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  // useEffect(() => {
  //   const { role } = getUserInfo() as any;
  //   setUserRole(role);
  // }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          Iv Trip
        </Typography>
      </Stack>
      <List>
        {drawerItems.map((item:any, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
