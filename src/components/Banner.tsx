type Props = {
  img: string;
};

const Banner = ({ img }: Props) => {
  return (
    <section className="object-cover">
      {img && <img className="mx-auto" src={img} alt="" />}
    </section>
  );
};

export default Banner;
