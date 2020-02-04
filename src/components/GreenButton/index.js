import React from "react";

import { Button } from "./styles";

export default function GreenButton({ textButton }) {
    return (
        <Button>
            <span>{textButton}</span>
        </Button>
    );
}
