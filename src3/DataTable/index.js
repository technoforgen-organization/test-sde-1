import React, { useState, useEffect } from "react";

import axios from "axios";

import { Table, Popconfirm, Button, Space, Form } from "antd";
import { isEmpty } from "lodash";

const DataTable = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [editingkey, setEditingkey] = useState("");
  const [editRow, setEdit] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setGridData(response.data);
    setLoading(false);
  };

  console.log("grid data", gridData);

  const handleDelete = (value) => {
    const dataSource = [...modifyData];
    const filterData = dataSource.filter((item) => item.id !== value.id);
    setGridData(filterData);
  };

  const modifyData = gridData.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    comment: isEmpty(body) ? item.comment : body,
  }));

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      editable: "true",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      editable: "true",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      align: "center",
      editable: "true",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        return modifyData.length >= 1 ? (
          <Space>
            <Popconfirm
              title="Delete..?"
              onConfirm={() => handleDelete(record)}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
             {editRow ? (
              <span>
                <Button 
                onClick={(e) => console.log(e)}
                  type="primary"
                   style={{marginRight: 8}}
                >
                  Save
                </Button>
              </span>
             )}
          </Space>
        ) : null;
      },

      // modifyData.length >= 1 ? (
      //   <Popconfirm title="Delete?" onConfirm={() => handleDelete(record)}>
      //     <Button type="primary" danger>
      //       Delete
      //     </Button>
      //   </Popconfirm>
      // ) : null,
    },
  ];
  console.log("modified data", modifyData);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={modifyData}
        bordered
        loading={loading}
      />
    </div>
  );
};

export default DataTable;
