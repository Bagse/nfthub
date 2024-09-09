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
import { Works } from "./components/Works";
import { SubscribeForm } from "./components/SubscribeForm";
import { Roadmap } from "./components/Roadmap";
import { Artists } from "./components/Artists";

function App() {
  return (
    <div className="">
      <Layout>
        <SectionContainer title="Nfthub's" title2="collection">
          <Collection />
        </SectionContainer>
        <SectionContainer title="Why" title2="choose us?">
          <Choose />
        </SectionContainer>
        <SectionStatistics />
        <SectionContainer title="How it" title2="works!">
          <Works />
        </SectionContainer>
        <SubscribeForm />
        <SectionContainer title="Nfthub's" title2="Roadmap">
          <Roadmap />
        </SectionContainer>
        <SectionContainer title="Meet" title2="the artists">
          <Artists />
        </SectionContainer>
        <SectionContainer title="Your questions," title2="answered!">
          
        </SectionContainer>
      </Layout>
    </div>
  );
}

export default App;
