import React, {useEffect, useState} from "react";
import {Button, Card, Form, Input, message, Space} from "antd";
import {reqAddHospitalSet, reqGetHospitalSetById, reqUpdateHospitalSet} from "@api/hospital/hospitalSet";
import {useNavigate, useParams} from "react-router-dom";

export default function AddOrUpdateHospital() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        let getHospitalSet = async () => {
            if(id) {
                let result = await reqGetHospitalSetById(id);
                form.setFieldsValue(result);
            }
        }
        getHospitalSet().catch(r => console.log(r));
    }, [form, id]);
    return (
        <Card>
            <Form form={form}
                name="basic"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 22 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={async () => {
                    setLoading(true);
                    try {
                        if(id) {
                            let data = form.getFieldsValue();
                            await reqUpdateHospitalSet({
                                ...data,
                                id
                            });
                            message.success("修改成功");
                            navigate(-1);
                        }else {
                            await reqAddHospitalSet(form.getFieldsValue());
                            message.success("添加成功");
                        }
                    }finally {
                        setLoading(false);
                    }
                }}
            >
                <Form.Item
                    label="医院名称"
                    name="hosname"
                    rules={[{ required: true, message: "医院名称不能为空" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="医院编号"
                    name="hoscode"
                    rules={[{ required: true, message: "医院编号不能为空" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="API基础路径"
                    name="apiUrl"
                    rules={[{ required: true, message: "apiUrl不能为空" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="联系人姓名"
                    name="contactsName"
                    rules={[{ required: true, message: "联系人姓名不能为空" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="联系人手机"
                    name="contactsPhone"
                    rules={[{ required: true, message: "手机不能为空" }, {pattern: /^1[3-9]\d{9}$/, message: "手机格式不正确"}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                    <Space>
                        <Button loading={loading} type="primary" htmlType="submit">
                            {id? '修改': '新增'}
                        </Button>
                        <Button onClick={() => {
                            navigate(-1);
                        }}>
                            返回
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    );
};