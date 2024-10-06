"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ConfigProvider } from "antd";
import { Header } from "./components/molecules/Header";
import 'react-datepicker/dist/react-datepicker.css';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const client = new ApolloClient({
  uri: "https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#7F56D9",
              },

              components: {
                Menu: { borderRadiusLG: 0 },
              },
            }}
          >
            {/* <Header /> */}
            <div className="py-2 min-h-screen" suppressHydrationWarning={true}>{children}</div>
          </ConfigProvider>
        </body>
      </html>
    </ApolloProvider>
  );
}

export default RootLayout;
