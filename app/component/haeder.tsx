import Link from "next/link"


export default function Header(){
 return(
    <div className="bg-cover bg-center bg-no-repeat w-full h-[50px]"style={{ backgroundImage: "url('/img/nav.jpg')" }}>
        
        <ul className=" flex justify-center items-center ">
            <li className="m-2 text-black text-[25px]" style={{ WebkitTextStrokeWidth: '0.5px' }}><Link href="/">Home</Link></li>
            <li className="m-2 text-black text-[25px]" style={{ WebkitTextStrokeWidth: '0.5px' }}><Link href="../about">About</Link></li>
            <li className="m-2 text-black text-[25px]" style={{ WebkitTextStrokeWidth: '0.5px' }}><Link href="../contact">Contact Us</Link></li>
        </ul>
    </div>
 )
}
