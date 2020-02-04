import React from "react";
import NextPage from "../../components/NextPage";
import LogoConfitec4 from "../../assets/images/logoConfitec4.png";
import {
    FaAngleDown,
    FaClock,
    FaAddressCard,
    FaMoneyBillWave,
    FaTachometerAlt
} from "react-icons/fa";

import {
    Container,
    Header,
    Body,
    Footer,
    ItensMenu,
    Alert,
    Card,
    InfoCard
} from "./styles";

export default function Layout4() {
    return (
        <>
            <NextPage next="/layout_5" back="/layout_3" />
            <Container>
                <Header>
                    <img src={LogoConfitec4} alt="LogoConfitec" width={70} />
                    <ItensMenu>
                        <span>
                            Courses <FaAngleDown />
                        </span>
                        <span>
                            Tutorials <FaAngleDown />
                        </span>
                        <span>Blog</span>
                        <span>About</span>

                        <button>GET STARTED</button>
                    </ItensMenu>
                </Header>
                <Body>
                    <h1>Motion Design Courses</h1>
                    <p>Brush up on your design & animation chops, master </p>
                    <p>software, or learn a new technique.</p>

                    <Alert>
                        <FaClock />
                        <p>Fall 2019 Session Starts </p>
                        <strong> Oct. 7th, 2019: </strong>
                        <span>12D</span>
                        <span>23H</span>
                        <span>04M</span>
                    </Alert>
                    <strong>
                        SEE COURSES BELOW <FaAngleDown />
                    </strong>
                </Body>

                <Footer>
                    <Card>
                        <FaAddressCard />
                        <InfoCard>
                            <strong>Upcoming Sessions</strong>
                            <p>• SUMMER 2019 | JUL 8</p>
                            <p>• FALL 2019 | OCT 12</p>
                        </InfoCard>
                        <p>More Info</p>
                    </Card>
                    <Card>
                        <FaMoneyBillWave />
                        <InfoCard>
                            <strong>Payment Plan</strong>
                            <p>
                                Pay in monthly installments, <br />
                                or all at once.
                            </p>
                        </InfoCard>
                        <p>More Info</p>
                    </Card>
                    <Card>
                        <FaTachometerAlt />
                        <InfoCard>
                            <strong>Flexible Learning</strong>
                            <p>
                                Learn from anywhere
                                <br /> at your ideal pace.
                            </p>
                        </InfoCard>
                        <p>More Info</p>
                    </Card>
                </Footer>
            </Container>
        </>
    );
}
