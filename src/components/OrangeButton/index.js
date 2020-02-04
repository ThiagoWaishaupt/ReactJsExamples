import React from "react";

import { Button } from "./styles";

export default function OrangeButton({ text }) {
    return (
        <Button>
            <span>{text}</span>
        </Button>
    );
}
