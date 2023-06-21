import React from "react";
import { List } from "antd";
import "antd/es/list/style/index.less";

const Footer: React.FC<Props> = ({ data }) => {
  return (
    <div className="__dumi-egg-links">
      <div className="__dumi-egg-links-wrap">
        {data.map((col: any, index: number) => {
          const { title, list } = col;

          if (!list) {
            return null;
          }

          return (
            <div className="__dumi-egg-links-item" key={`${index}`}>
              <List
                key={title}
                header={title}
                dataSource={list}
                bordered={false}
                split={false}
                renderItem={(item: {
                  name: string;
                  qrcode?: string;
                  url?: string;
                }) => {
                  if (item.qrcode) {
                    return (
                      <List.Item>
                        <img
                          className="__dumi-egg-links-qrcode"
                          src={item.qrcode}
                        />
                      </List.Item>
                    );
                  }

                  return (
                    <List.Item>
                      <a href={item.url} target="_blank">
                        {item.name}
                      </a>
                    </List.Item>
                  );
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;

interface Props {
  data: any;
}
