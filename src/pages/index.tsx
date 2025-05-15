import Hero from '@/components/Hero';
import Investment from '@/components/Investment';
import { getHomeContent } from '@/lib/api';

export default function Home({ hero,investment }) {
  return (
    <>
      <Hero data={hero} />
      <Investment data={investment} />
    </>
  );
}


export async function getStaticProps() {
  const data = await getHomeContent();
  return {
    props: {
      hero:data.hero,
      investment:data.investment,
    },
    revalidate: 10,
  };
}