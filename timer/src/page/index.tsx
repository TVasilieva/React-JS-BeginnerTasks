import React from "react";

import { ComponentProps } from "./types";

import Layout from "../components/layout";
import Timer from "../components/timer";

const TimerPage: React.FC<ComponentProps> = () => {
  return (
    <Layout>
      <Timer />
    </Layout>
  );
};

export default TimerPage;
