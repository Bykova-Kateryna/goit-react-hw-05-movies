import { Hearts } from 'react-loader-spinner';
import { LoaderSection } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderSection>
      <Hearts
        height="80"
        width="80"
        color="#2384F5"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderSection>
  );
};
