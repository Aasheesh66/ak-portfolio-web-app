import Header from "@/src/components/Header";
import Sidebar from "@/src/components/Sidebar";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Resume from "@/src/components/sections/Resume";
import Services from "@/src/components/sections/Services";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Separator from "@/src/components/Separator";
import 'devicon/devicon.min.css';
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data: profile } = useSWR('/api/profile', fetcher);
  const { data: projects } = useSWR('/api/projects', fetcher);
  const { data: experiences } = useSWR('/api/experiences', fetcher);

  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <div className="page-content">
        <Sidebar profile={profile} />
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home profile={profile} />
            <About profile={profile} experiences={experiences} />
            <Separator type={"down"} />
            <Resume experiences={experiences} />
            <Separator type={"up"} />
            <Portfolio projects={projects} />
            <Separator type={"down"} />
            <Services />
            <Separator type={"up"} />
            <Contact profile={profile} />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
