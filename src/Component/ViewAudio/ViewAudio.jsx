import {
  Space,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
} from "antd";
import "./ViewAudio.css";
import { useEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import moment from "moment";

let data = [
  {
    id: 1,
    title: "Last Christmas",
    description:
      "Last Christmas là một bài hát của bộ đôi nhóm nhạc Anh Quốc Wham!aaa ",
    language: "Vietnamese",
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
  const [addingSong, setAddingSong] = useState(false);

  //filter

  const [filteredData, setFilteredData] = useState(data); // State to hold filtered data
  const [numberToShow, setNumberToShow] = useState(5); // State for the number of songs to display
  const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter
  const [startDate, setStartDate] = useState(null); // State for start date filter
  const [endDate, setEndDate] = useState(null); // State for end date filter

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
          <Button
            type="default"
            onClick={() => {
              // Functionality to view a specific line of data
              // For example, open a modal or navigate to a new view
              console.log(record); // Display data for the specific row
            }}
          >
            View
          </Button>
        </Space>
      ),
    },
  ];
  // Function to handle applying filters
  const applyFilters = () => {
    let newData = [...data];

    // Apply number of songs filter
    newData = newData.slice(0, numberToShow);

    // Apply category filter
    if (categoryFilter) {
      newData = newData.filter((item) => item.category === categoryFilter);
    }

    // Apply create date range filter
    if (startDate && endDate) {
      newData = newData.filter(
        (item) =>
          moment(item.createDate).isSameOrAfter(startDate, "day") &&
          moment(item.createDate).isSameOrBefore(endDate, "day")
      );
    }
    setFilteredData(newData);
  };
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
              audioLink: values.audioLink,
              language: values.language || "Vietnamese",
              imageLink: values.imageLink,
              createDate: values.createDate,
              duration: values.duration,
              publicDate: values.publicDate,
              lyrics: values.lyrics,
              categories: values.categories,
            };
            setDatas([...datas, newSong]);
            setAddingSong(false);
            // Reset the form
            document.getElementById("addSongForm").reset();
          }}
        >
          <Form.Item
            label="Audio Link"
            name="audioLink"
            rules={[
              { required: true, message: "Please input the Audio Link!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Language" name="language" initialValue="Vietnamese">
            <Input />
          </Form.Item>

          <Form.Item
            label="Image Link"
            name="imageLink"
            rules={[
              { required: true, message: "Please input the Image Link!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Create Date"
            name="createDate"
            rules={[
              { required: true, message: "Please input the Create Date!" },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item label="Duration" name="duration">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Public Date" name="publicDate">
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Lyrics"
            name="lyrics"
            rules={[{ required: true, message: "Please input the Lyrics!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Categories" name="categories">
            <Select
              options={[
                {
                  value: "indie",
                  label: "Nhạc Indie",
                },
                {
                  value: "rap",
                  label: "Nhạc Rap",
                },
                {
                  value: "pop",
                  label: "Nhạc Pop",
                },
                {
                  value: "ballad",
                  label: "Nhạc Ballad",
                },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Inputs for filters */}
      <InputNumber
        value={numberToShow}
        onChange={(value) => setNumberToShow(value)}
        placeholder="Number of songs"
        style={{ marginRight: "10px" }}
      />

      <Select
        value={categoryFilter}
        onChange={(value) => setCategoryFilter(value)}
        placeholder="Filter by category"
        style={{ width: "200px", marginRight: "10px" }}
        options={[
          {
            value: "indie",
            label: "Nhạc Indie",
          },
          {
            value: "rap",
            label: "Nhạc Rap",
          },
          {
            value: "pop",
            label: "Nhạc Pop",
          },
          {
            value: "ballad",
            label: "Nhạc Ballad",
          },
        ]}
      />

      <DatePicker.RangePicker
        value={[startDate, endDate]}
        onChange={(dates) => {
          setStartDate(dates[0]);
          setEndDate(dates[1]);
        }}
        style={{ marginRight: "10px" }}
      />

      <Button type="primary" onClick={applyFilters}>
        OK
      </Button>

      {/* Table with filtered data */}
      {filteredData.length > 0 ? (
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ position: ["bottomCenter"], pageSize: 5 }}
        />
      ) : (
        <Table
          columns={columns}
          dataSource={datas}
          pagination={{ position: ["bottomCenter"], pageSize: 5 }}
        />
      )}
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
            setDatas(
              datas.map((data) => {
                if (data.id === id) {
                  return {
                    ...data,
                    title: values["Title Article"],
                    description: values["Description"],
                    audioLink: values.audioLink,
                    language: values.language || "Vietnamese",
                    imageLink: values.imageLink,
                    createDate: values.createDate,
                    duration: values.duration,
                    publicDate: values.publicDate,
                    lyrics: values.lyrics,
                    categories: values.categories,
                  };
                }
                return data;
              })
            );
            document.getElementById("editSongForm").reset();
          }}
        >
          <Form.Item
            label="Audio Link"
            name="audioLink"
            rules={[
              { required: true, message: "Please input the Audio Link!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Language" name="language" initialValue="Vietnamese">
            <Input />
          </Form.Item>

          <Form.Item
            label="Image Link"
            name="imageLink"
            rules={[
              { required: true, message: "Please input the Image Link!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Create Date" name="createDate">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Duration" name="duration">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Public Date" name="publicDate">
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Lyrics"
            name="lyrics"
            rules={[{ required: true, message: "Please input the Lyrics!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Categories" name="categories">
            <Select
              options={[
                {
                  value: "indie",
                  label: "Nhạc Indie",
                },
                {
                  value: "rap",
                  label: "Nhạc Rap",
                },
                {
                  value: "pop",
                  label: "Nhạc Pop",
                },
                {
                  value: "ballad",
                  label: "Nhạc Ballad",
                },
              ]}
            />
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
