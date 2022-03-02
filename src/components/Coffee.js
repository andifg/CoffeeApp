import { Card, Avatar, Skeleton, Rate } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import React from "react";
import { useState, useEffect } from "react";

const { Meta } = Card;

const Coffee = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        const completeName = `${actualData.results[0].name.first} ${actualData.results[0].name.last}`;
        console.log(completeName);
        console.log(completeName);
        setData(completeName);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
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
            avatar={data ? <Avatar src="https://joeschmoe.io/api/v1/random" /> : ""}
            title={data ? data : "NO DATA RETRIEVABLE "}
            description={error ? error : "No error"}
          />
          <div><Rate allowHalf defaultValue={2.5} onChange={console.log()} /></div>
        </Skeleton>
      </Card>
    </div>
  );
};

export default Coffee;
