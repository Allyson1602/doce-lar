import React, { FC } from "react";
import dynamic from "next/dynamic";

const Map: FC = () => {
    const MapWithNoSSR = dynamic(() => import("./mapLeaflet"), {
        ssr: false
    });

    return <MapWithNoSSR />;
}

export default Map;
