import { request, gql } from 'graphql-request';

const WP_API = 'https://nextwordpress.mmag.in/graphql';

export const getHomeContent = async () => {
  const query = gql`
    query GetPageWithACF {
      page(id: "home", idType: URI) {
        title
        heroSection {
          mainHeading
          subHeading
        }
      }
    }
  `;

  try {
    const data = await request(WP_API, query);
    console.log('✅ GraphQL Response:', JSON.stringify(data, null, 2));
    return {
      hero: data.page.heroSection,
      investment: data.page.heroSection,
    };
  } catch (error) {
    console.error('❌ GraphQL Error:', JSON.stringify(error, null, 2));
    throw error; // rethrow to show on frontend
  }
};