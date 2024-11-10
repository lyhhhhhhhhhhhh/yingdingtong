import React from 'react';
import { Modal, Form, Input } from 'antd';

interface EditClubModalProps {
    visible: boolean;
    onOk: (values: API.Club) => void;
    onCancel: () => void;
    initialValues: API.Club | null;
}

const EditClubModal: React.FC<EditClubModalProps> = ({ visible, onOk, onCancel, initialValues }) => {
    const [form] = Form.useForm();

    // 当 initialValues 改变时，重置表单字段
    React.useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [initialValues, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onOk(values);
            form.resetFields();
        } catch (error) {
            console.log("Validation failed:", error);
        }
    };

    return (
        <Modal
            title="编辑社团信息"
            visible={visible}
            onOk={handleOk}
            onCancel={() => {
                form.resetFields();
                onCancel();
            }}
        >
            <Form form={form} layout="vertical">
                <Form.Item name="clubId" label="Club ID" hidden>
                    <Input />
                </Form.Item>
                <Form.Item name="name" label="社团名称" rules={[{ required: true, message: "请输入社团名称" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="社团描述">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditClubModal;