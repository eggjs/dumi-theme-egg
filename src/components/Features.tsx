import React from "react";

const Feature: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className="__dumi-egg-features">
      <div className="__dumi-egg-features-wrap">
        {data.map((item, index) => {
          return (
            <div className="__dumi-egg-features-item" key={`${index}`}>
              <div className="__dumi-egg-features-item-icon">
                <img src={item.icon} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;

interface Props {
  data: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
}
