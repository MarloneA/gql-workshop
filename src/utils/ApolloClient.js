import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

// create a concatenatable http link for apollo
const httpLink = createHttpLink({
    uri: "http://127.0.0.1:5000/blog_api",
    headers: {
      contentType: "application/json"
    }
  });

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
  
  export default apolloClient;