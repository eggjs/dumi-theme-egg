import React from "react";

const Copyright: React.FC<Props> = ({ site }) => {
  return (
    <div className="__dumi-egg-copyright">
      Copyright © {new Date().getFullYear()} {site}
    </div>
  );
};

export default Copyright;

interface Props {
  site: string;
}
