import GlobalProvider from "./GlobalProvider";

const ContextProvider = ({ children }) => {
  return (
    <>
      <>
        <GlobalProvider>{children}</GlobalProvider>
      </>
    </>
  );
};

export default ContextProvider;
