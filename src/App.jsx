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
import { Choose } from "./components/Choose";
import { SectionStatistics } from "./components/SectionStatistics";

function App() {
  return (
    <div className="">
      <Layout>
        <SectionContainer title="Nfthub's" title2="collection" >
          <Collection />
        </SectionContainer>
        <SectionContainer title="Why" title2="choose us?" >
          <Choose />
        </SectionContainer>
        <SectionStatistics />
      </Layout>
    </div>
  );
}

export default App;
