/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { AuthProvider } from '../utils/context/authContext';
import { ShoppingCartProvider } from '../utils/context/ShoppingCartContext';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {/* gives children components access to user and auth methods */}
      <ShoppingCartProvider>
        <ViewDirectorBasedOnUserAuthStatus
          // if status is pending === loading
          // if status is logged in === view app
          // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </ShoppingCartProvider>
    </AuthProvider>
  );
}

export default MyApp;
