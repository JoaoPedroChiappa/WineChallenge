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

    <div className="product">
      <div className="product-found">
        <p> 6 produtos encontrados </p>
      </div>
      <div className="product-menu">
        {data?.map((ev) => (
          <div key={ev.id}>
            <Link href={`/events/${ev.id}`} passHref legacyBehavior>
              <a href={`/events/${ev.id}`}>
                <div className="single-product">
                  <div className="image">
                    <Image
                      width={200}
                      height={300}
                      alt={ev.title}
                      src={ev.image}
                    />
                  </div>
                  <div className="content">
                    <b> {ev.title} </b>
                    <p> R${ev.price} </p>
                  </div>
                </div>
                <button className="button-add"> ADICIONAR </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);
