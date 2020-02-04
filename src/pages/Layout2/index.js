import React from "react";
import { Container, Header, Body, Bottom } from "./styles";
import NextPage from "../../components/NextPage";
import {
    FaAlignJustify,
    FaInstagram,
    FaPinterest,
    FaTwitter
} from "react-icons/fa";

export default function Layout2() {
    return (
        <>
            <NextPage next="/layout_3" back="/" />
            <Container>
                <Header>
                    <button>
                        <FaAlignJustify size={23} />
                    </button>

                    <div>
                        <p>Bedroom</p>
                        <p>Bathroom</p>
                        <p>Dinning</p>
                        <p>Hallway</p>
                        <p>Kitchen</p>
                    </div>
                </Header>
                <Body>
                    <strong>Explore your</strong>
                    <h1>Interior Details</h1>
                    <button>Explore</button>
                </Body>
                <Bottom>
                    <div>
                        <strong>
                            Get inspired by Our Curated Room Designs
                        </strong>
                        <p>
                            Colonial or Modern, Contemporary or Eclectic - we
                            have one for every style.
                        </p>
                        <p>
                            Go ahead. Discover your perfect home. Fill the form
                            to get started!
                        </p>
                    </div>
                    <div>
                        <FaInstagram size={20} />
                        <FaPinterest size={20} />
                        <FaTwitter size={20} />
                    </div>
                </Bottom>
            </Container>
        </>
    );
}
