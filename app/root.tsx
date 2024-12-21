import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

import { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/christmasLogo.png",
      type: "image/png",
    },
  ]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Gift For You from AIPSA" },
    {
      name: "description",
      content: "Celebrate Christmas with exclusive gifts from AIPSA. Claim your reward now!",
    },
    {
      property: "og:title",
      content: "A Special Christmas Gift Awaits You!",
    },
    {
      property: "og:description",
      content: "Join AIPSA's holiday celebration and receive amazing Christmas offers!",
    },
    {
      property: "og:image",
      content: "https://gift.allindiaprivateschools.org/christmasLogo.png",  // Full URL to your image
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:url",
      content: "https://gift.allindiaprivateschools.org",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "A Special Christmas Gift from AIPSA",
    },
    {
      name: "twitter:description",
      content: "Celebrate the holiday season with exclusive rewards. Click to claim!",
    },
    {
      name: "twitter:image",
      content: "https://gift.allindiaprivateschools.org/christmasLogo.png",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
