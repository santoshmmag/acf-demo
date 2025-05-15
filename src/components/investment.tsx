type InvestmentProps = {
  data: {
    mainHeading: string;
    subHeading: string;
  };
};

export default function Investment({ data }: InvestmentProps) {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold">{data.mainHeading}</h1>
      <p className="text-lg mt-4">{data.subHeading}</p>
    </section>
  );
}