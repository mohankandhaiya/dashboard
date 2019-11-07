import React, { Component } from 'react'
import { Avatar, Typography } from "antd";
import { Row, Col } from 'antd';

const { Title, Text } = Typography;

class ProductCard extends Component {
    render() {
        return (
            <div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 4 }} lg={{ span: 6 }}>
                        <Avatar shape="square" className="avatar-size" icon="user" src="" />
                    </Col>
                    <Col xs={{ span: 16 }} lg={{ span: 14 }}>
                        <Title level={4}> HP Envy 13 Core i3 8th Gen - (4 GB/128 GB SSD/Windows 10 Home) 13-ah0042tu Thin and Light Laptop  (13.3 inch, Natural Silver, 1.21 kg) </Title>
                        <Text> Stylish & Portable Thin and Light Laptop </Text><br />
                        <Text> 13.3 inch Full HD LED Backlit IPS Scratch Resistant Anti-glare Display </Text><br />
                        <Text> Finger Print Sensor for Faster System Access </Text><br />
                        <Text> Light Laptop without Optical Disk Drive </Text><br />
                        <Text> Stylish & Portable Thin and Light Laptop </Text><br />
                        <Text> 13.3 inch Full HD LED Backlit IPS Scratch Resistant Anti-glare Display </Text><br />
                        <Text> Finger Print Sensor for Faster System Access </Text><br />
                        <Text> Light Laptop without Optical Disk Drive </Text><br />
                    </Col>
                    <Col xs={{ span: 4 }} lg={{ span: 4 }}>
                        <Text> ₹56,990 ₹58,0511% off </Text>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProductCard