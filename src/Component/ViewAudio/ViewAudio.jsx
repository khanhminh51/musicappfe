import { Space, Table, Button, Modal, Form, Input } from "antd";
import "./ViewAudio.css";
import { useEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

let data = [
  {
    id: 1,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham!aaa ",
  },
  {
    id: 2,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 3,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 4,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 5,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 6,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 7,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 8,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 9,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
  {
    id: 10,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham! ",
  },
];

const ViewAudio = () => {
  const [datas, setDatas] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [id, setID] = useState(0);
  const [addingSong, setAddingSong] = useState(false); // New state for controlling the form display

  //   useEffect(() => {
  //     // get api
  //     setDatas();
  //   }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title Article",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setOpenModal(true);
              setID(record.id);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setDatas([...datas].filter((d) => d.id !== record.id));
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          padding: "10px 15px",
          backgroundColor: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => setAddingSong(true)}
      >
        <PlusCircleOutlined style={{ marginRight: "5px" }} />
        Add New Song
      </Button>

      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
              color: "#199cff",
              fontFamily: "Poppins",
            }}
          >
            Add New Song
          </div>
        }
        visible={addingSong}
        onCancel={() => setAddingSong(false)}
        footer={null}
      >
        <Form
          name="addSongForm"
          onFinish={(values) => {
            const newSong = {
              id: datas.length + 1,
              title: values.title,
              description: values.description,
            };
            setDatas([...datas, newSong]);
            setAddingSong(false);
            document.getElementById("addSongForm").reset();
          }}
        >
          <Form.Item
            label="Title Article"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={datas}
        pagination={{ position: ["bottomCenter"], pageSize: 5 }}
      />
      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
              color: "#199cff",
              fontFamily: "Poppins",
            }}
          >
            Edit Song
          </div>
        }
        open={openModal}
        footer={null}
        onOk={() => {
          setOpenModal(false);
        }}
        onCancel={() => {
          setOpenModal(false);
        }}
        style={{
          top: 20,
        }}
        styles={{
          content: { width: 700 },
          title: { fontSize: 50 },
        }}
      >
        <Form
          name="editSongForm"
          labelCol={{
            flex: "110px",
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: 600,
          }}
          onFinish={(values) => {
            setOpenModal(false);
            console.log(values);
            setDatas(
              [...datas].map((data) => {
                if (data.id === id) {
                  data.title = values["Title Article"];
                  data.description = values["Description"];
                }

                return data;
              })
            );
            document.getElementById("editSongForm").reset();
          }}
        >
          <Form.Item
            label="title"
            name="Title Article"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="Description"
            rules={[{ required: true, message: "Please input the description!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ViewAudio;
