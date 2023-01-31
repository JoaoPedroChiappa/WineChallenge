import Link from "next/link";
import Image from "next/image";
import logo from "public/images/wine.jpg";
import { IoSearchCircleOutline } from "@react-icons/all-files/io5/IoSearchCircleOutline";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import { BsBag } from "@react-icons/all-files/bs/BsBag";

export const Header = () => (
  <div className="header">
    <Image src={logo} width={120} height={100} alt={"Wine"} />
    <div className="links">
      <Link className="item" href="/">
        Clube
      </Link>
      <Link className="item" href="/">
        Loja
      </Link>
      <Link className="item" href="/">
        Produtores
      </Link>
      <Link className="item" href="/">
        Ofertas
      </Link>
      <Link className="item" href="/">
        Eventos
      </Link>
    </div>
    <div className="icons">
      <Link className="icon-search" href="/">
        <IoSearchCircleOutline />
      </Link>
      <Link className="icon-user" href="/">
        <BiUserCircle />
      </Link>
      <Link className="icon-bag" href="/">
        <BsBag />
      </Link>
    </div>
  </div>
);
