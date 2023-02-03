import Image from "next/image";
import Link from "next/link";
import { IoChevronBackOutline } from "@react-icons/all-files/io5/IoChevronBackOutline";

export const SingleProduct = ({ data }) => (
  <>
    <div className="single-product-page">
      <div className="back-link">
        <IoChevronBackOutline className="back-icon" />
        <Link href={"/"} passHref legacyBehavior>
          <a href={"/"}> Voltar </a>
        </Link>
      </div>
      <div className="single-product-content">
        <div className="single-product-image">
          <Image src={data.image} width={400} height={650} alt={data.title} />
        </div>
        <div className="single-product-desc">
          <h4> {data.title} </h4>
          <p className="price-partner"> R$ {data.pricePartner} </p>
          <p className="price-real"> Não sócio R$ {data.price}/UN.</p>
          <b> Comentário do Sommelier </b>
          <p className="product-review"> {data.review} </p>
          <div className="single-product-addbutton">
            <Link href={"/"} passHref legacyBehavior>
              <a href={"/"}>Adicionar</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
