import { Card, Avatar, Skeleton, Rate } from "antd";
import { EditOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import React from "react";
import { useState, useEffect } from "react";

const { Meta } = Card;
import { getName } from "./CoffeeHelper";

const Coffee = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);

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

  const saveChanges = (e) => {
    setEdit(false);
    props.seteditCoffee(false);
  };

  const editCard = (e) => {
    setEdit(true);
    props.seteditCoffee(true);
  };

  const delteCard = (e) => {
    props.deleteCoffee(props.coffee);
  };
  const getActions = () => {
    if (edit) {
      return [<SaveOutlined key="saveChanges" onClick={saveChanges} />];
    }
    return [
      <EditOutlined key="edit" onClick={!edit && !props.editCoffee ? editCard : ""} />,
      <DeleteOutlined key="delete" onClick={!edit && !props.editCoffee ? delteCard :""} />,
    ];
  };

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
        actions={getActions()}
      >
        <Skeleton loading={loading} avatar active>
          <Meta title={props.coffee} />
          <div>
            <Rate allowHalf defaultValue={2.5} disabled={!edit} />
            {edit && <p>Change the Rating here</p>}
          </div>
        </Skeleton>
      </Card>
    </div>
  );
};

export default Coffee;
