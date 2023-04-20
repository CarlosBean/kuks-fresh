type Props = {
  img: string;
};

const Banner = ({ img }: Props) => {
  return (
    <section>
      {img && <img className="w-full object-cover" src={img} alt="" />}
    </section>
  );
};

export default Banner;
