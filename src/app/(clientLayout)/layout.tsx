import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/Navabr";
import {Container} from "@/components/SharedComponents/Container";
import {Box} from "@mui/material";

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
<div>

      <NavBar />
      <Box >{children}</Box>
      <Footer />
</div>
  
  );
};

export default CommonLayout;
