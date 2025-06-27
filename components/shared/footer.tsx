import React from "react";
import { Link } from "@heroui/link";

import { DiscordIcon, GithubIcon, TwitterIcon } from "./icons";

import { siteConfig } from "@/config/site";
import { UI_CONSTANTS } from "@/lib/constants/ui-constants";

const CopyrightWrapper = () => {
  const { copyrightBGColor } = UI_CONSTANTS.footer;

  return (
    <div
      className={`w-full py-4 text-center items-center text-sm text-default-500 bg-[${copyrightBGColor}]`}
    >
      <span>© {new Date().getFullYear()} </span>
      <Link className="text-default-600 hover:text-default-800" href="/">
        Ticket.net
      </Link>
      <span>. All rights reserved.</span>
    </div>
  );
};

const LinksWrapper = () => {
  const { footerItems } = siteConfig;
  const visibleFooterItems = footerItems.filter((item) => !item.isHidden);

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-x-12 lg:gap-x-32 xl:gap-x-32 ">
      {visibleFooterItems.map((item) => (
        <Link
          key={item.href}
          className="text-default-600 hover:text-default-800"
          href={item.href}
          underline="always"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const AppFooter = () => {
  const { twitter, discord, github } = siteConfig.links;

  return (
    <footer className="w-full flex-col items-center justify-center pt-3">
      <div className="container mx-auto max-w-7xl px-6 py-2">
        <div className="flex-row justify-between items-center sm:flex">
          <div className="flex-col text-sm text-default-500 w-full sm:w-1/2 justify-items-center sm:justify-items-start mb-3 sm:mb-0">
            <span>Powered by </span>
            <Link className="text-default-600 hover:text-default-800" href="/">
              Ticket.net
            </Link>

            <div className="flex items-center gap-3 mt-2 ">
              <Link isExternal aria-label="Twitter" href={twitter}>
                <TwitterIcon className="text-default-500" />
              </Link>
              <Link isExternal aria-label="Discord" href={discord}>
                <DiscordIcon className="text-default-500" />
              </Link>
              <Link isExternal aria-label="Github" href={github}>
                <GithubIcon className="text-default-500" />
              </Link>
            </div>
          </div>
          <LinksWrapper />
        </div>
      </div>
      <CopyrightWrapper />
    </footer>
  );
};

export default AppFooter;
