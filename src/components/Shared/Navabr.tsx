"use client";
import {useGetAllSiteSettingQuery} from "@/redux/features/siteSetting/siteSettingApi";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import config from "../../config/config";
import NavbarTabSearch from "./NavbarTabSearch";
import ThemeToggleButton from "../SharedComponents/ThemeToggleButton";

interface Tab {
  id: number;
  name: string;
  icon: string;
  type: string;
}

const Navbar = () => {
  const {data, isLoading} = useGetAllSiteSettingQuery(null);
  const siteSettings = data?.data?.siteSettings;
  const [navbar, setNavbar] = useState(false);
  const [selectedCode, setSelectedCode] = useState("BD");
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const profileDropDownRef = useRef<HTMLDivElement | null>(null);
  const tabs: Tab[] = [
    {id: 1, name: "flights", icon: "icon-tickets", type: "isFlight"},
    {id: 2, name: "hotels", icon: "icon-bed", type: "isHotel"},
    {id: 3, name: "tours", icon: "icon-destination", type: "isTour"},
    {id: 4, name: "visa", icon: "icon-destination", type: "isVisa"},
    {id: 5, name: "umrah", icon: "icon-destination", type: "isUmrah"},
  ];
  const currentTab = "flights";
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Navbar]);

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {pathname === "/" ? (
        <div
          className={` fixed top-0 mt-0 left-0 right-0 w-full z-20 ${
            isScrolled ? "bg-white shadow-lg" : "bg-transparent"
          } h-16 md:h-20 mt-0`}
        >
          <div className="flex justify-between h-16 md:h-20 container items-center mx-auto px-4 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
            <Link href="/">
              {isScrolled ? (
                <img
                  className="w-24"
                  src={`${
                    config.blobUrl +
                    (siteSettings?.logo?.header
                      ? siteSettings?.logo?.header
                      : "8d43cd37-efa1-401c-bcf5-7fb898e1ada1.png")
                  }`}
                  alt="IV Trip Logo"
                />
              ) : (
                <img
                  className="w-24"
                  src={`${
                    config.blobUrl +
                    (siteSettings?.logo?.nav
                      ? siteSettings?.logo?.nav
                      : "8d43cd37-efa1-401c-bcf5-7fb898e1ada1.png")
                  }`}
                  alt=""
                />
              )}
            </Link>

            <div className=" lg:block md:space-x-3">
              <nav className="lg:flex">
                <div
                  className={`text-sm  text-black font-semibold px-3 hover:text-blue-900   ${
                    isScrolled ? "sm:block hidden" : "hidden"
                  }  `}
                >
                  <NavbarTabSearch tabs={tabs} currentTab={currentTab} />
                </div>
              </nav>
            </div>

            {/* User profile */}

            <div className=" flex items-center">
              <ThemeToggleButton />
              <div className="relative mx-1">
                <div className="flex items-center">
                  <div className="is-menu-opened-hide">
                    <Link className=" sm:block" href="/login">
                      <button
                        className={` ${
                          isScrolled
                            ? "bg-blue-900  text-white hover:bg-blue-950"
                            : "bg-white hover:text-white hover:bg-blue-900"
                        }
                             w-20 h-8 px-2 py-1 mr-2 text-sm font-bold  bg-primaryColor rounded-lg group `}
                      >
                        Sign in
                      </button>
                    </Link>
                  </div>

                  {/* <>
                        <div className="relative" ref={dropdownRef}>
                          <img
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer ml-2 "
                            onClick={() => setIsOpenProfile(!isOpenProfile)}
                            src={
                              userInfo?.user?.profileImg && userInfo?.user?.profileImg ? (
                                userInfo?.user?.profileImg
                              ) : (
                                <svg
                                  className=" w-12 h-12 text-gray-400 -left-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              )
                            }
                            alt="Profile Image"
                          ></img>
                          {isOpenProfile && (
                            <div
                              className="absolute right-0 top-10  z-10 mt-2 w-56 origin-top-right rounded-lg  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabindex="-1"
                            >
                              <div role="none">
                                <Link
                                  href="/profile"
                                  className="text-gray-700 rounded-lg block px-10 py-5  text-sm hover:bg-gray-200"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                >
                                  Profile
                                </Link>
                                <Link
                                  href="/profile/booking?type=flight"
                                  className="text-gray-700 block  px-10 py-5  text-sm hover:bg-gray-200"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                >
                                  My Bookings
                                </Link>
                                <Link
                                  href="/login"
                                  className="text-gray-700 block w-full  px-10 py-5  rounded-lg text-left text-sm hover:bg-gray-200"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-3"
                                  onClick={() => handleSignOut()}
                                >
                                  Sign out
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                   */}
                  {/* signin and User Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` fixed top-0 left-0 right-0 w-full z-30 bg-white shadow-lg
           h-16 md:h-20 mt-0`}
        >
          <div
            className={`flex justify-between h-16 md:h-20    container items-center mx-auto px-4 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-7xl`}
          >
            <Link href="/">
              <img
                className="w-24"
                src={`${
                  config.blobUrl +
                  (siteSettings?.logo?.header
                    ? siteSettings?.logo?.header
                    : "8d43cd37-efa1-401c-bcf5-7fb898e1ada1.png")
                }`}
                alt="IV Trip Logo"
              />
            </Link>

            <div className="hidden  lg:block md:space-x-3">
              <nav className={`lg:flex items-center`}>
                <NavbarTabSearch tabs={tabs} currentTab={currentTab} />
              </nav>
            </div>

            <div className=" flex items-center">
              {/* User profile */}
              <div className="relative mx-1">
                <div className="flex items-center">
                  <div className="is-menu-opened-hide">
                    <Link className=" sm:block" href="/login">
                      <button
                        className={` ${
                          isScrolled
                            ? "bg-primaryColor  text-white hover:bg-blue-950"
                            : "bg-white hover:text-white hover:bg-blue-900"
                        }
                             w-20 h-8 px-2 py-1 mr-2 text-sm font-bold  bg-primaryColor rounded-lg group `}
                      >
                        Sign in
                      </button>
                    </Link>
                  </div>

                  {/* <>
                        <div className="relative" ref={dropdownRef}>
                          <img
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer ml-2 "
                            onClick={() => setIsOpenProfile(!isOpenProfile)}
                            src={
                              userInfo?.user?.profileImg && userInfo?.user?.profileImg ? (
                                userInfo?.user?.profileImg
                              ) : (
                                <svg
                                  className=" w-12 h-12 text-gray-400 -left-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              )
                            }
                            alt="Profile Image"
                          ></img>
                          {isOpenProfile && (
                            <div
                              className="absolute right-0 top-10  z-10 mt-2 w-56 origin-top-right rounded-lg  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabindex="-1"
                            >
                              <div role="none">
                                <Link
                                  href="/profile"
                                  className="text-gray-700 rounded-lg block px-10 py-5  text-sm hover:bg-gray-200"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                >
                                  Profile
                                </Link>
                                <Link
                                  href="/profile/booking?type=flight"
                                  className="text-gray-700 block  px-10 py-5  text-sm hover:bg-gray-200"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                >
                                  My Bookings
                                </Link>
                                <Link
                                  href="/login"
                                  className="text-gray-700 block w-full  px-10 py-5  rounded-lg text-left text-sm hover:bg-gray-200"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-3"
                                  onClick={() => handleSignOut()}
                                >
                                  Sign out
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                   */}
                  {/* signin and User Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
