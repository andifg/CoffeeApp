import { Card, Avatar, Skeleton, Rate } from "antd";
import {
  EditOutlined,
  DeleteOutlined

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
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" onClick={(e)=> {props.deleteCoffee(props.coffee)}} />
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            title={props.coffee}
            description={data ? data : error}
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
