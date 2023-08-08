// import React from "react";

import {Button, Card, Form, Input, Select, Space, Table} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {ColumnsType} from "antd/lib/table";
import {HospitalListItem, ProvinceOrCityItem} from "@api/hospital/model/hospitalListTypes";
import React, {useEffect, useState} from "react";
import {reqGetCityList, reqGetHospitalList, reqGetHosTypes, reqGetProvinceList} from "@api/hospital/hospitalList";
import {Link} from "react-router-dom";
import {reqUpdateScheduleStatus} from "@api/hospital/hospitalSchedule";

const {Option} = Select;

export default function HospitalList() {
    let columns:ColumnsType<HospitalListItem> = [
        {
            title: "序号",
            render: (_, record, index) => {
                return index + 1;
            }
        },
        {
            title: "医院 logo",
            dataIndex: "logoData",
            render: (v) => {
                return <img width={60} src={"data:image/png;base64," + v} alt="" />;
            }
        },
        {
            title: "医院名称",
            dataIndex: "hosname"
        },
        {
            title: "医院等级",
            render: (_, record) => {
                return record.param.hostypeString;
            }
        },
        {
            title: "详细地址",
            render: (_, record) => {
                return record.param.fullAddress;
            }
        },
        {
            title: "状态",
            dataIndex: "status",
            render: (value) => {
                return value === 0 ? "未上线" : "已上线";
            }
        },
        {
            title: "创建时间",
            dataIndex: "createTime"
        },
        {
            title: "操作",
            render: (_, record) => {
                return <Space>
                    <Link to={`/syt/hospital/hospitalList/${record.id}`}><Button type="primary">查看</Button></Link>
                    <Link to={'/syt/hospital/schedule'} state={{hoscode: record.hoscode}}><Button type="primary">排班</Button></Link>
                    <Button type="primary" onClick={async () => {
                        await reqUpdateScheduleStatus(record.id, record.status === 0 ? 1 : 0);
                        setFresh(!fresh);
                    }}>{record.status? '下线': '上线'}</Button>
                </Space>;
            }
        }
    ];

    // 状态
    const [province, setProvince] = useState<ProvinceOrCityItem[]>([]);
    const [cities, setCities] = useState<ProvinceOrCityItem[]>([]);
    const [district, setDistrict] = useState<ProvinceOrCityItem[]>([]);
    const [hosType, setHosType] = useState<ProvinceOrCityItem[]>([]);
    const [hospital, setHospital] = useState<HospitalListItem[]>([]);
    const [current,setCurrent] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [fresh, setFresh] = useState<boolean>(false);

    const [form] = Form.useForm();
    useEffect(() => {
        let getProvince = async () => {
            setProvince(await reqGetProvinceList());
        };
        getProvince();
        let getHostypes = async () => {
            //发送请求获取所有的省份
            let hostypes = await reqGetHosTypes();
            //更新状态
            setHosType(hostypes);
        }
        getHostypes();
    }, []);
    useEffect(() => {
        setLoading(true);
        let fields = form.getFieldsValue();
        let getHospital = async () => {
            try {
                let result = await reqGetHospitalList({page: current, limit: pageSize, ...fields});
                setHospital(result.content);
                setTotal(result.totalElements);
            }finally{
                setLoading(false);
            }
        };
        getHospital();
    }, [current, pageSize, fresh, form]);

    return (
        <Card>
            <Form
                layout={"inline"}
                form={form}
                onFinish={() => {
                    setFresh(!fresh);
                    setCurrent(1);
                }}
            >
                <Form.Item name="provinceCode" style={{width: 200, marginBottom: 20}}>
                    <Select
                        placeholder="请选择省"
                        onChange={async (provinceId: React.Key) => {
                            setCities([]);
                            setDistrict([]);
                            form.setFieldsValue({cityCode: undefined, districtCode: undefined});
                            setCities(await reqGetCityList(provinceId));
                        }}
                    >
                        {province.map((item) => <Option key={item.id} value={item.value}>{item.name}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item name="cityCode" style={{width: 200}}>
                    <Select
                        placeholder="请选择市"
                        onChange={async (cityId: React.Key) => {
                            setDistrict([]);
                            form.setFieldsValue({districtCode: undefined});
                            setDistrict(await reqGetCityList(cityId));
                        }}
                    >
                        {cities.map((item) => <Option key={item.id} value={item.value}>{item.name}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item name="districtCode" style={{width: 200}}>
                    <Select
                        placeholder="请选择区"
                    >
                        {district.map((item) => <Option key={item.id} value={item.value}>{item.name}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name={"hosname"}>
                    <Input placeholder="医院名称" />
                </Form.Item>
                <Form.Item name={"hoscode"}>
                    <Input placeholder="医院编号" />
                </Form.Item>

                <Form.Item name="hostype" style={{width: 200}}>
                    <Select
                        placeholder="选择医院类型"
                    >
                        {hosType.map((item) => <Option key={item.id} value={item.value}>{item.name}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item name="status" style={{width: 200}}>
                    <Select
                        placeholder="医院状态"
                    >
                        <Option value="0">未上线</Option>
                        <Option value="1">已上线</Option>
                    </Select>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>查询</Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="reset" onClick={() => {
                        form.resetFields();
                        setFresh(!fresh);
                        setCurrent(1);
                    }}>清空</Button>
                </Form.Item>
            </Form>
            <div className="h-20"></div>
            <Table bordered rowKey="id" columns={columns} dataSource={hospital} loading={loading}
                 pagination={{
                     current, pageSize, total,
                     showSizeChanger: true,
                     pageSizeOptions: ["5", "10", "15", "20"],
                     onChange: async (page, pageSize) => {
                         setLoading(true);
                         setCurrent(page);
                         setPageSize(pageSize || 5);
                         let result = await reqGetHospitalList({page, limit: pageSize || 5});
                         setHospital(result.content);
                         setLoading(false);
                     }
                 }}
            />
        </Card>
    );
};