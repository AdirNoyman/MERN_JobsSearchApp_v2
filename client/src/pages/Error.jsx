import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="">
          <img src={img} alt="not found" />
          <h3>404 Page Not Found</h3>
          <p>
            Sorry, we can&apos;t seem to find the page you are looking for...
          </p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="">
        <h3>Oops..something went wrong 🫣</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
