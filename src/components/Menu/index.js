import React from "react";
import { FaHome, FaTasks, FaComment, FaCog } from "react-icons/fa";
import OrangeButton from "../../components/OrangeButton";
import { Container, Title, Tabs, Support } from "./styles";

export default function Menu() {
    return (
        <Container>
            <Title>
                <h1>C</h1>
                <h1>Confitec</h1>
            </Title>
            <Tabs>
                <strong>
                    <FaHome />
                    Home
                </strong>
                <strong>
                    <FaTasks />
                    Progress
                </strong>
                <strong>
                    <FaComment />
                    Messages
                </strong>
                <strong>
                    <FaCog />
                    Settings
                </strong>
            </Tabs>
            <Support>
                <strong>Support 24/7</strong>
                <p>Contact us anytime</p>
                <OrangeButton text={"Start"} />
            </Support>
        </Container>
    );
}
