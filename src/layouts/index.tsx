import React, { useContext } from "react";

// @ts-ignore
import { context } from "dumi/theme";
// @ts-ignore
import Layout from "dumi-theme-default/es/layout";

import Intro from "../components/Intro";
import Links from "../components/Links";
import Features from "../components/Features";
import Copyright from "../components/Copyright";

import "../style/theme.less";

const EggLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  const {
    meta,
    config: { theme },
  } = useContext(context) as any;
  const { title, egg } = meta;

  const renderHome = () => {
    return (
      <>
        <Intro data={egg} />
        <Features data={egg.features} />
        <Links data={theme.links} />
        <Copyright site="Eggjs.org" />
      </>
    );
  };

  const renderTitle = () => {
    return (
      <div className="__dumi-egg-title">
        <h1>{title}</h1>
      </div>
    );
  };

  if (egg) {
    return <Layout {...props}>{renderHome()}</Layout>;
  }

  return (
    <Layout {...props}>
      {renderTitle()}
      {children}
    </Layout>
  );
};

export default EggLayout;

interface Props {}
