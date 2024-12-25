
import Image from "next/image";




export default function Home() {
  return (
    
   <div className="mbox">
   
    <div className="box1 bg-cover bg-center bg-no-repeat w-full h-[600px] mb-[100px]" style={{
        backgroundImage: "url('/img/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '600px',
      }}>
       <br />
    <div className="box2 mx-[20px] my-[100px] w-[30%] h-full">
      <h1 className="box2-h1 m-2 text-[60px] leading-[50px] text-[#a1662f] text-[1px] font-sans"  style={{
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: 'rgb(0, 0, 0)',
      }}>Modern Interior Design Studio</h1>
      <p className="box2-p m-2 text-[16px] text-black">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
      <button className="box2-btn border-[1px] border-black rounded-[25px] w-[50%] bg-[#a1662f] text-white text-lg">shop now</button>
      <button className="box2-btn border-[1px] border-black rounded-[25px] w-[50%] bg-[#a1662f] text-white text-lg">explore</button>
    </div></div>
    <center>
    <div className="heading flex justify-center w-[200px] h-[50px] bg-white p-1 items-center text-[#a1662f] border-2 border-dotted border-[#a1662f] rounded-[25px] mb-[50px]">
    <h1 className="haeding-h1 text-[20px]">our catalogue</h1>
    </div></center>
    <div className=" box3 flex justify-center w-full h-full p-[11px] bg-white flex-wrap mx-[20px] my-[100px]">
      
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c1.jpg" alt="" width={250}  height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div>
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center ">
      <Image src="/img/c2.jpg" alt="" width={250} height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div>
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c3.jpg" alt="" width={250} height={250} className="bbox3-img h-[250px] rounded-[25px]"/>
      </div>
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c4.jpg" alt="" width={250} height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div> 
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c5.jpg" alt="" width={250} height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div>
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c6.jpg" alt="" width={250} height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div>
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c7.jpg" alt="" width={250} height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div>
      <div className="box3-div w-[250px] h-full bg-[#a1662f] m-2 rounded-[25px] flex justify-center">
      <Image src="/img/c8.jpg" alt="" width={250} height={250} className="box3-img h-[250px] rounded-[25px]"/>
      </div>
    </div>
   </div>
  );
}
