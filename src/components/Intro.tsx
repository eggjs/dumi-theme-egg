import React from "react";

const Intro: React.FC<Props> = ({ data }) => {
  const { info, guide, promo } = data;

  return (
    <div className="__dumi-egg-intro">
      <div className="__dumi-egg-intro-wrap">
        {guide && (
          <div className="__dumi-egg-intro-logo">
            <a href={guide.link}>
              <img src="https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg" />
            </a>
          </div>
        )}

        <div className="__dumi-egg-intro-info">
          {info && (
            <>
              <h1>
                <p className="__dumi-egg-intro-info-stronge">{info.title}</p>
                {info.desc}
              </h1>
              <p>{info.content}</p>
            </>
          )}

          {guide && (
            <div className="__dumi-egg-intro-buttons">
              <a className="__dumi-egg-intro-button __dumi-egg-intro-button-primary" href={guide.link}>
                {guide.title}
              </a>
              <a
                className="__dumi-egg-intro-button __dumi-egg-intro-button-secondary"
                href="https://github.com/eggjs/egg/"
              >
                GitHub
              </a>
            </div>
          )}

          {promo && (
            <div className="__dumi-egg-intro-promote">
              {promo.logo ? <img src={promo.logo} /> : null}
              <a href={promo.link} target="_blank">
                {promo.title} &gt;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

interface Props {
  data: {
    desc: string;
    info: {
      title: string;
      desc: string;
      content: string;
    };
    guide: {
      title: string;
      link: string;
    };
    promo: {
      logo?: string;
      title: string;
      link: string;
    };
  };
}
