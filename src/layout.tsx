import { Navbar } from "./common/Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
