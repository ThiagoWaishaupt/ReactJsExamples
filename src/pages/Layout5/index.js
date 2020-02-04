import React from "react";
import NextPage from "../../components/NextPage";
import { Container, Principal, Header } from "./styles";
import Menu from "../../components/Menu";
import { FaSearch, FaUser } from "react-icons/fa";
import OrangeButton from "../../components/OrangeButton";
import Courses from "../../components/Courses";
import Lives from "../../components/Lives";

export default function Layout5() {
    return (
        <>
            <NextPage next="/" back="/layout_4" />
            <Container>
                <Menu />
                <Principal>
                    <Header>
                        <FaSearch />
                        <input type="text" placeholder="Search..." />
                        <FaUser />
                        <OrangeButton text={"New"} />
                    </Header>
                    <h1>Your unfinished courses</h1>

                    <Courses />
                    <h1>Live lessons</h1>
                    <Lives />
                </Principal>
            </Container>
        </>
    );
}
