import { request, gql } from 'graphql-request';
import { GetPageWithAcfQuery } from '@/generated/graphql';

const WP_API = 'https://nextwordpress.mmag.in/graphql';

const HOMEPAGE_QUERY = gql`
  query GetPageWithACF {
    page(id: "home", idType: URI) {
      title
      heroSection {
        mainHeading
        subHeading
      }
      investmentSection {
        mainHeading
        subHeading
      }
    }
  }
`;

export const getHomeContent = async (): Promise<NonNullable<GetPageWithAcfQuery['page']>> => {
  const data: GetPageWithAcfQuery = await request(WP_API, HOMEPAGE_QUERY);

  if (!data.page) {
    throw new Error('No homepage data found');
  }

  return data.page;
};
