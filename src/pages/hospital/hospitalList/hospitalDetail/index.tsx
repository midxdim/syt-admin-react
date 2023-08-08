import React, {useEffect, useState} from "react";
import {Badge, Button, Card, Descriptions} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {ReqGetHospitalDetail} from "@api/hospital/model/hospitalListTypes";
import {reqGetHospitalDetail} from "@api/hospital/hospitalList";

export default function Index() {
    let {id} = useParams();
    let [hospitalInfo, setHospitalInfo] = useState<ReqGetHospitalDetail>();
    let navigate = useNavigate();
    useEffect(() => {
        let getHospitalDetail = async () => {
            let hospitalDetail = await reqGetHospitalDetail(id as string);
            setHospitalInfo(hospitalDetail);
        }
        getHospitalDetail();
    }, [id]);
    return (
        <Card>
            <Descriptions title="基本信息" bordered>
                <Descriptions.Item label="医院名称">{hospitalInfo?.hospital.hosname}</Descriptions.Item>
                <Descriptions.Item label="医院 LOGO" span={2}><img width="50" src={hospitalInfo?.hospital.logoData && 'data:image/png;base64,' + hospitalInfo?.hospital.logoData} alt=""/></Descriptions.Item>
                <Descriptions.Item label="医院编码">{hospitalInfo?.hospital.hoscode}</Descriptions.Item>
                <Descriptions.Item label="医院地址" span={2}>{hospitalInfo?.hospital.param.fullAddress}</Descriptions.Item>
                <Descriptions.Item label="坐车路线" span={3}>
                    {hospitalInfo?.hospital.route}
                </Descriptions.Item>
                <Descriptions.Item label="医院简介" span={3}>
                    {hospitalInfo?.hospital.intro}
                </Descriptions.Item>
            </Descriptions>
            <div className="h-20"></div>
            <Descriptions title="预约规则信息" bordered>
                <Descriptions.Item label="预约周期">{hospitalInfo?.bookingRule.cycle}</Descriptions.Item>
                <Descriptions.Item label="放号时间" span={2}>{hospitalInfo?.bookingRule.releaseTime}</Descriptions.Item>
                <Descriptions.Item label="停挂时间">{hospitalInfo?.bookingRule.stopTime}</Descriptions.Item>
                <Descriptions.Item label="退号时间" span={2}>{hospitalInfo?.bookingRule.quitTime}</Descriptions.Item>
                <Descriptions.Item label="预约规则" span={3}>
                    {hospitalInfo?.bookingRule.rule.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </Descriptions.Item>
            </Descriptions>
            <div className="h-20"></div>
            <Button onClick={() => {
                navigate(-1);
            }}>返回</Button>
        </Card>
    );
};