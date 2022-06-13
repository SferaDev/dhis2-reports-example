import { DataQuery } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import styled from "@emotion/styled";

const query = {
  me: { resource: "me" },
};

const MyApp = () => (
  <Container>
    <DataQuery query={query}>
      {({ error, loading, data }) => {
        if (error) return <span>ERROR</span>;
        if (loading) return <span>...</span>;
        return (
          <>
            <h1>{i18n.t("Hello {{name}}", { name: data.me.name })}</h1>
            <h3>{i18n.t("Welcome to DHIS2!")}</h3>
          </>
        );
      }}
    </DataQuery>
  </Container>
);

export default MyApp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
