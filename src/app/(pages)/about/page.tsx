// import cn from "@/lib/utils";
import axios from "axios";

export default async function aboutPage() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(">>> data:", data.data);
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <p>Viet Nam Travel</p>
    </div>
  )
}
