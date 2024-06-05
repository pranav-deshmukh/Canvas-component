import { FC } from "react";

interface HomeProps {
  
}
 
const Home: FC<HomeProps> = () => {
  return ( 
    <div className="w-screen h-screen">
      <canvas 
      className="w-[100%] h-[100%] border border-black rounded-md"/>
    </div>
   );
}
 
export default Home;