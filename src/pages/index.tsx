import { GetPageWithAcfQuery } from '@/generated/graphql';
import Hero from '@/components/hero';
import Investment from '@/components/investment';
import { getHomeContent } from '@/lib/api';

type Props = {
  page: NonNullable<GetPageWithAcfQuery['page']>;
};

export default function Home({ page }: Props) {
  return (
    <>
      <Hero data={page.heroSection} />
      <Investment data={page.investmentSection} />
    </>
  );
}

export async function getStaticProps() {
  const page = await getHomeContent();

  return {
    props: {
      page,
    },
    revalidate: 10,
  };
}
