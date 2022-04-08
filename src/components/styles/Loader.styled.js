import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const LoaderWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <ClipLoader size={30} color={"#d14949"}></ClipLoader>
    </LoaderWrapper>
  );
}
