import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home-page">
    <div className="side-menu">
      <h4> Refine sua busca </h4>
      <p> Por preço </p>
      <input type="radio" name="PriceRange" value="1" id="priceRange1" />
      <label htmlFor="priceRange1"> Até R$40 </label>
      <br />
      <input type="radio" name="PriceRange" value="2" id="priceRange2" />
      <label htmlFor="priceRange2"> R$40 A R$60 </label>
      <br />
      <input type="radio" name="PriceRange" value="3" id="priceRange3" />
      <label htmlFor="priceRange3"> R$100 A R$200 </label>
      <br />
      <input type="radio" name="PriceRange" value="4" id="priceRange4" />
      <label htmlFor="priceRange4"> R$200 A R$500 </label>
      <br />
      <input type="radio" name="PriceRange" value="5" id="priceRange5" />
      <label htmlFor="priceRange5"> Acima de R$500 </label>
    </div>

    <div className="product-menu">
      {data?.map((ev) => (
        <div className="single-product" key={ev.id}>
          <Link href={`/events/${ev.id}`} passHref legacyBehavior>
            <a className="card" href={`/events/${ev.id}`}>
              <div className="image">
                <Image width={250} height={200} alt={ev.title} src={ev.image} />
              </div>
              <div className="content">
                <h2> {ev.title} </h2>
                <p> R${ev.price} </p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
