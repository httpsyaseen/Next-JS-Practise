import MainImage from "@/public/images/b3.jpg";
import MainImage1 from "@/public/images/main.png";

import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-w-full ">
      <Image src={MainImage} alt="Hehe" />
    </div>
  );
};

export default Home;
