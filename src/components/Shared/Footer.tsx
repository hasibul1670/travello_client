"use client";
import {Box, useTheme} from "@mui/material";
import Link from "next/link";
import {Container} from "../SharedComponents/Container";
import ThemeToggleButton from "../SharedComponents/ThemeToggleButton";
const Footer = () => {
  const theme = useTheme();
  const discoverItems = [
    {text: "About", href: "/about-us"},
    {text: "Terms", href: "/terms"},
    {text: "Privacy Policy", href: "/privacy-policy"},
    {text: "Refund Policy", href: "/refund-policy"},
    // { text: 'Become Affiliate', href: '/affiliate-program' },
  ];
  const paymentMethods = ["Payoneer", "Paypal", "Stripe"];
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        padding: "16px",
      }}
      className="bg-palette.background.paper text-center text-primary"
    >
      <footer className="px-[4rem]">
        <Container className="pt-12 md:pt-20">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <p className="mb-4 flex items-center text-sm font-bold sm:justify-start  md:justify-start">
                Discover
              </p>

              {discoverItems.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="mb-4 flex items-start text-[13px] justify-start hover:text-blue-300 lg:ml-auto "
                >
                  {link.text}
                </Link>
              ))}

              <Link
                href={"/affiliate-program"}
                className="mb-4 flex items-start text-[13px] justify-start hover:text-blue-300 lg:ml-auto "
              >
                Become Affiliate
              </Link>
            </div>

            <div className="">
              <p className="mb-4  flex justify-start  text-sm font-bold ">Payment Methods</p>
              {paymentMethods.map((method, index) => (
                <p key={index} className="mb-4">
                  <a
                    href="#!"
                    className="mb-4 flex items-start text-[13px] justify-start hover:text-blue-300 lg:ml-auto "
                  >
                    {method}
                  </a>
                </p>
              ))}
            </div>

            <div className="  ">
              <p className="mb-4  flex  text-sm font-bold justify-start ">
                Need Helps?
                <br />
              </p>
              <p className="mb-4 flex text-[13px] lg:ml-auto   text-left justify-content ">
                We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM
                - 10PM).
              </p>
            </div>

            <div>
              <p className="mb-4 flex items-start text-sm font-bold  justify-start  lg:ml-auto ">
                Contact
              </p>

              <p className="mb-4 flex items-start text-[13px] justify-start hover:text-blue-300 lg:ml-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                bd@implevista.com
              </p>
              <p className="mb-4 flex items-start text-[13px] justify-start hover:text-blue-300 lg:ml-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                +8801717760924
              </p>
            </div>
          </div>
          <hr className="mt-5" />
        </Container>

        <div className="  text-sm flex justify-between container items-center mx-auto px-4 py-5 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
          <Link className="font-semibold " href="/">
            IV Trip
          </Link>

          <span>©{new Date().getFullYear()} by IV Trip</span>

          <ThemeToggleButton />
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
