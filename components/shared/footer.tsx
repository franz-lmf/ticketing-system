import React from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { DiscordIcon, GithubIcon, TwitterIcon } from "./icons";

import { siteConfig } from "@/config/site";

const CopyrightWrapper = () => {
  return (
    <div
      className={`w-full items-center bg-custom-background py-4 text-center text-sm text-default-500`}
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
    <div className="grid grid-cols-3 gap-4 md:gap-x-12 lg:gap-x-32 xl:gap-x-32">
      {visibleFooterItems.map((item) => (
        <Link
          key={item.href}
          className="uppercase text-default-600 hover:text-default-800"
          href={item.href}
          size="sm"
          underline="always"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const MailingListWrapper = () => {
  return (
    <div className="bg-primary p-12 px-14">
      <div className="container mx-8 grid gap-2 md:grid-cols-2">
        <div className="">
          <h1 className="text-3xl font-extrabold uppercase">
            Receive news and updates.
          </h1>
          <span className="font-medium">
            Enter your email to subscribe in our mailing list.
          </span>
        </div>
        <div className="mx-auto">
          <Input
            required
            className="p-8"
            name="email"
            placeholder="Enter your email"
            size="lg"
            type="email"
            endContent={<Button className="uppercase">subscribe</Button>}
            // value={form.name}
            // onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const AppFooter = () => {
  const { twitter, discord, github } = siteConfig.links;

  return (
    <footer className="w-full flex-col items-center justify-center bg-[url(/img/footer_bg.jpg)] bg-cover bg-center bg-no-repeat pt-3">
      <MailingListWrapper />
      <div className="container mx-auto max-w-7xl bg-[#OE102D] px-6 py-10">
        <div className="flex-row items-center justify-between sm:flex">
          <div className="mb-3 w-full flex-col justify-items-center text-sm text-default-500 sm:mb-0 sm:w-1/3 sm:justify-items-start">
            <span>Powered by </span>
            <Link className="text-default-600 hover:text-default-800" href="/">
              Ticket.net
            </Link>

            <div className="mt-2 flex items-center gap-3">
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
