import { GraphQLClient } from 'graphql-request';

export default function request({
  query, variables, includeDrafts, excludeInvalid,
}) {
  const headers = {
    authorization: 'Bearer 9bc0fbef64eea00653493f00b84ba5',
    // authorization: `Bearer ${process.env.VUE_APP_CMS_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }

  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com/', { headers });
  return client.request(query, variables);
}
