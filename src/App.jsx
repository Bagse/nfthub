import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import { Layout } from "./components/Layout";
import { SectionContainer } from "./components/SectionContainer";
import { Collection } from "./components/Collection";

function App() {
  return (
    <div className="">
      <Layout>
        <SectionContainer title="Nfthub's" title2="collection" >
          <Collection />
        </SectionContainer>
      </Layout>
    </div>
  );
}

export default App;
