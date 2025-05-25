import { headers } from "next/headers";
import HomeHeader from "./home-header";
// import DefaultHeader from "./default-header";

export default async function Header() {

  const headersList = await headers()

  const pathname = headersList.get("x-pathname");
  console.log(">>>pathname: ", pathname);

  return <HomeHeader />;
}
