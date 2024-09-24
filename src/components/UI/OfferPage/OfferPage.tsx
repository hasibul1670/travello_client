import {Container} from "@/components/SharedComponents/Container";
import DiscoverBangladesh from "./DiscoverBangladesh";
import HotDeals from "./HotDeal";
import SpecialOffer from "./SpecialOffer";

const OfferPage = () => {
  return (
    <Container>
      <DiscoverBangladesh />
      <HotDeals />
      <SpecialOffer />
    </Container>
  );
};

export default OfferPage;
