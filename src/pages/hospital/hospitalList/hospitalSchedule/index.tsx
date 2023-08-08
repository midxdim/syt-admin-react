import {Breadcrumb, Button, Card, Col, Pagination, Row, Table, Tag, Tree} from "antd";
import { DataNode } from "antd/lib/tree";
import React, {useEffect, useState} from "react";
import {BookingScheduleItem, Department, DoctorItem} from "@api/hospital/model/hospitalScheduleTypes";
import {ColumnsType} from "antd/lib/table";
import {reqGetDepartments, reqGetDoctorList, reqGetSchedule} from "@api/hospital/hospitalSchedule";
import {useLocation, useNavigate} from "react-router-dom";

export default function HospitalSchedule() {
    const [department, setDepartment] = useState<Department[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
    const [depcode, setDepcode] = useState<string>("");
    const [schedules, setSchedules] = useState<BookingScheduleItem[]>([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [doctors, setDoctors] = useState<DoctorItem[]>([]);
    const [hosname, setHosname] = useState("");
    const [depname, setDepname] = useState("");
    const [workDate, setWorkDate] = useState("");

    let {state} = useLocation();
    let hoscode = (state as any).hoscode;
    let navigate = useNavigate();

    //定义表格的结构
    let columns: ColumnsType<DoctorItem> = [
        {
            title: "序号",
            render: (_, record, index) => {
                return index + 1;
            }
        },
        {
            title: "职称",
            dataIndex: "title"
        },
        {
            title: "号源时间",
            dataIndex: "workDate"
        },
        {
            title: "总预约数",
            dataIndex: "reservedNumber"
        },
        {
            title: "剩余预约数",
            dataIndex: "availableNumber"
        },
        {
            title: "挂号费",
            dataIndex: "amount"
        },
        {
            title: "擅长技能",
            dataIndex: "skill"
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            if(!hoscode) return;
            let departments = await reqGetDepartments(hoscode);
            let result = departments.map(item => ({...item, disabled: true}));
            setDepartment(result);
            let ids = result.map(item => item.depcode);
            setExpandedKeys(ids);
            let depcode = (result[0].children as Department[])[0].depcode;
            let depname = (result[0].children as Department[])[0].depname;
            setDepcode(depcode);
            setDepname(depname);
        };
        fetchData();
    }, [hoscode]);
    useEffect(() => {
        let fetchData = async () => {
            if(!depcode) return;
            let schedules = await reqGetSchedule({page: current, limit: pageSize, hoscode, depcode});
            setSchedules(schedules.bookingScheduleList);
            setTotal(schedules.total);
            setHosname(schedules.baseMap.hosname);
            let workData = schedules.bookingScheduleList[0].workDate;
            setWorkDate(workData);
        };
        fetchData();
    }, [current, depcode, hoscode, pageSize]);
    useEffect(() => {
        let fetchData = async () => {
            if(!workDate) return;
            let doctors = await reqGetDoctorList(hoscode, depcode, workDate);
            setDoctors(doctors);
        };
        fetchData();
    }, [depcode, hoscode, workDate]);

    return (
        <Card>
            {/* 路径导航 */}
            <Breadcrumb>
                <Breadcrumb.Item>选择: {hosname}</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {depname}
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    {workDate}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="h-20"></div>
            {/* 内容区 */}
            <Row gutter={30}>
                {/* 左侧列 */}
                <Col span={5} >
                    <div style={{border: "solid 1px #ddd", height: "calc(100vh - 200px)", overflowY:"scroll"}}>
                        <Tree
                            expandedKeys={expandedKeys}
                            selectedKeys={[depcode]}
                            defaultCheckedKeys={["0-0-0", "0-0-1"]}
                            fieldNames={{ title: "depname", key: "depcode" }}
                            // onSelect={onSelect}
                            // onCheck={onCheck}
                            treeData={department as []}
                            onSelect={async (selectedKey, info:any) => {
                                setDepcode(info.node.depcode);
                                setDepname(info.node.depname);
                            }}
                        />
                    </div>
                </Col>

                {/* 右侧列 */}
                <Col span={19}>
                    {/* 排班日期列表 */}
                    <div>
                        {schedules.map((item, index) => <Tag
                                color={item.workDate === workDate? "green": ""}
                                key={index}
                                style={{cursor: "pointer"}}
                                onClick={async () => {
                                    setWorkDate(item.workDate);
                                }}
                            >
                            <div>{item.workDate} {item.dayOfWeek}</div>
                            <div>{item.availableNumber} / {item.reservedNumber}</div>
                        </Tag>
                        )}

                    </div>
                    <div className="h-20"></div>
                    {/* 分页结构 */}
                    <Pagination
                        current={current}
                        total={total}
                        pageSize={pageSize}
                        showSizeChanger={true}
                        onChange={(page, pageSize) => {
                            setCurrent(page);
                            setPageSize(pageSize);
                        }}
                    />
                    <div className="h-20"></div>
                    {/* 表格结构 */}
                    <Table rowKey={"id"} columns={columns} dataSource={doctors} pagination={false} bordered />
                    <div className="h-20"></div>
                    <Button onClick={() => {
                        navigate(-1);
                    }}>返回</Button>
                </Col>
            </Row>
        </Card>
    );
}
