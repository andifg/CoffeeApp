import { Card, Avatar, Skeleton, Rate } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import { useState, useEffect } from "react";

const { Meta } = Card;
import { getName} from "./CoffeeHelper";

const Coffee = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const data = await getName();

      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="coffee-wrapper">
      <Card
        className="coffee"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              data ? <Avatar src="https://joeschmoe.io/api/v1/random" /> : "None"
            }
            title={data ? data : "NO DATA RETRIEVABLE "}
            description={error ? error : props.name}
          />
          <div>
            <Rate allowHalf defaultValue={2.5} disabled="true" />
          </div>
        </Skeleton>
      </Card>
    </div>
  );
};

export default Coffee;
