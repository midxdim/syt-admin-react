import {Button, Card, Form, Input, message, Popconfirm, Space, Table} from "antd";
import React, {useEffect, useState} from "react";
import {SearchOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {ColumnsType} from "antd/lib/table";
import {HospitalSetItem} from "@api/hospital/model/hospitalSetTypes";
import {reqBatchRemoveHospitalSet, reqGetHospitalSet, reqRemoveHospitalSet} from "@api/hospital/hospitalSet";
import {useNavigate} from "react-router-dom";

export default function HospitalSet() {
    const [hospitalSet, setHospitalSet] = useState<HospitalSetItem[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [current, setCurrent] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(false);
    const [values, setValues] = useState<any>({hoscode: "", hosname: ""});
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]|string[]>([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();


    let columns: ColumnsType<HospitalSetItem> = [
        {
            title: "序号",
            width: 70,
            align: "center",
            render: (_, r, i) => {
                return i + 1;
            }
        },{
            title: "医院名称",
            dataIndex: "hosname",
        },{
            title: "医院编号",
            dataIndex: "hoscode",
        },{
            title: "API基础路径",
            dataIndex: "apiUrl",
        },{
            title: "签名密钥",
            dataIndex: "signKey",
        },{
            title: "联系人",
            dataIndex: "contactsName",
        },{
            title: "联系电话",
            dataIndex: "contactsPhone",
        },{
            title: "状态",
            dataIndex: "status",
        },{
            title: "操作",
            width: 100,
            fixed: "right",
            render: (_, r) => {
                return <Space>
                    <Button onClick={() => {
                        navigate(`/syt/hospital/hospitalSet/edit/${r.id}`);
                    }} type="primary" icon={<EditOutlined />}></Button>

                    <Popconfirm
                        title="确定删除？"
                        onConfirm={async () => {
                            //发送请求删除当前 id 的医院
                            await reqRemoveHospitalSet(String(r.id));
                            //提醒
                            message.success("删除成功");
                            //更新列表
                            setValues({ hoscode: "", hosname: "" });
                        }}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type="primary" danger icon={<DeleteOutlined />}></Button>
                    </Popconfirm>
                </Space>;
            }
        },
    ];

    useEffect(() => {
        let getHospitalSet = async () => {
            setLoading(true);
            let result = await reqGetHospitalSet({
                page: current,
                limit: pageSize,
                ...values
            });
            // console.log(result);
            setHospitalSet(result.records);
            setTotal(result.total);
            setLoading(false);
        };
        getHospitalSet().catch(r => console.log(r));
    }, [current, pageSize, values, refresh]);

    return (
        <Card>
            <Form layout="inline" onFinish={(values) => {
                setHospitalSet([]);
                setValues(values);
                setCurrent(1);
            }}>
                <Form.Item name="hosname">
                    <Input placeholder="医院名称" />
                </Form.Item>
                <Form.Item name="hoscode">
                    <Input placeholder="医院编号" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>查询</Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="reset" onClick={() => {
                        setHospitalSet([]);
                        setValues({hoscode: "", hosname: ""});
                    }}>清空</Button>
                </Form.Item>
            </Form>
            <div className="h-20"></div>
            <Space>
                <Button type="primary" onClick={() => {
                    navigate("/syt/hospital/hospitalSet/add");
                }}>添加</Button>
                <Button disabled={selectedRowKeys.length === 0} onClick={async () => {
                    await reqBatchRemoveHospitalSet(selectedRowKeys);
                    message.success("批量删除成功");
                    setRefresh(!refresh);
                }}>批量删除</Button>
            </Space>
            <div className="h-20"></div>
            <Table
                bordered
                loading={loading}
                columns={columns}
                rowKey="id"
                scroll={{x: 1200}}
                // dataSource={data}
                dataSource={hospitalSet}
                pagination={{
                    current,
                    total,
                    pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: [2, 5, 10, 20],
                    showQuickJumper: true,
                    showTotal: (total) => {
                        return `总共 ${total} 条数据`;
                    },
                    onChange: (page, pageSize) => {
                        setHospitalSet([]);
                        setCurrent(page);
                        setPageSize(pageSize || 5);
                    }
                }}
                rowSelection={{
                    type: "checkbox",
                    selectedRowKeys,
                    onChange: (selectedRowKeys) => {
                        setSelectedRowKeys(selectedRowKeys as number[]);
                    }
                }}
            />
        </Card>
    );
};
