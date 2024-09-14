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
import { Questions } from "./components/Questions";

function App() {
  return (
    <div className="bg-white dark:bg-[#0f051d]">
      <Layout>
        <SectionContainer title="Nfthub's" title2="collection" pro="text-4xl">
          <Collection />
        </SectionContainer>
        <SectionContainer title="Why" title2="choose us?" pro="text-4xl">
          <Choose />
        </SectionContainer>
        <SectionStatistics />
        <SectionContainer title="How it" title2="works!" pro="text-4xl">
          <Works />
        </SectionContainer>
        <SubscribeForm />
        <SectionContainer title="Nfthub's" title2="Roadmap" pro="text-4xl">
          <Roadmap />
        </SectionContainer>
        <SectionContainer title="Meet" title2="the artists" pro="text-4xl">
          <Artists />
        </SectionContainer>
        <SectionContainer
          title="Your questions,"
          title2="answered!"
          pro="text-[25px]"
        >
          <Questions />
        </SectionContainer>
      </Layout>
    </div>
  );
}

export default App;
