import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="tours" subtitle="collection" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
