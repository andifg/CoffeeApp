import React from "react";
import { Form, Input } from "antd";

const AddForm = (props) => {
  return (
    <Form
      form={props.form}
      name="basic"
      onFinish={props.preHandleOk}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Coffee Name"
        name="coffeename"
        rules={[
          {
            required: true,
            message: "Please input a Coffee Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default AddForm;
