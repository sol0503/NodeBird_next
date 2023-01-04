import React from "react";
import { List } from "antd";
const FollowList = ({ header, data }) => {
  return <List style={{ marginBottom: 20 }} header={<div>{header}</div>} />;
};
export default FollowList;
