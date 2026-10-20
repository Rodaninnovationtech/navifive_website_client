export const IMAGES = {
    aboutWelder:
        "https://images.pexels.com/photos/15143151/pexels-photo-15143151.jpeg?auto=compress&cs=tinysrgb&w=1400",
    serviceRepair:
        "https://images.unsplash.com/photo-1631622483070-8ea904171f11?q=80&w=1400&auto=format&fit=crop",
    serviceOffshore:
        "https://images.unsplash.com/photo-1651776651282-fef8477df33a?q=80&w=1400&auto=format&fit=crop",
    serviceCrewing:
        "https://images.pexels.com/photos/39779002/pexels-photo-39779002.jpeg?auto=compress&cs=tinysrgb&w=1400",
    serviceShipbuilding:
        "https://images.unsplash.com/photo-1698664683348-f9f35b809821?q=80&w=1400&auto=format&fit=crop",
    servicePort:
        "https://images.unsplash.com/photo-1771756743973-27c3f308c6f1?q=80&w=1600&auto=format&fit=crop",
    serviceLogistics:
        "https://images.unsplash.com/photo-1613690399151-65ea69478674?q=80&w=1600&auto=format&fit=crop",
    fleetContainer:
        "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1400&auto=format&fit=crop",
    fleetOffshore:
        "https://images.unsplash.com/photo-1648555394313-494797ad48fc?q=80&w=1400&auto=format&fit=crop",
    fleetTanker:
        "https://images.unsplash.com/photo-1699588999949-e25959a59550?q=80&w=1400&auto=format&fit=crop",
    projectRig:
        "https://images.pexels.com/photos/3192662/pexels-photo-3192662.jpeg?auto=compress&cs=tinysrgb&w=1600",
    projectPort:
        "https://images.unsplash.com/photo-1770372762108-acee3a5acc52?q=80&w=1600&auto=format&fit=crop",
    projectWeld:
        "https://images.pexels.com/photos/37663559/pexels-photo-37663559.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Company", href: "#company" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
    "Drydock & Retrofit",
    "Deepwater Offshore",
    "Shipbuilding",
    "Fleet Tracking",
    "Port Agency",
    "Emergency Response",
];

export const STATS = [
    { value: 38, suffix: "", label: "Years on the water" },
    { value: 48, suffix: "", label: "Vessels under management" },
    { value: 120, suffix: "+", label: "Ports served" },
    { value: 2400, suffix: "", label: "Crew & engineers" },
];

export type Service = {
    id: string;
    title: string;
    body: string;
    img?: string;
    span: string;
    tall?: boolean;
    wide?: boolean;
};

export const SERVICES: Service[] = [
    {
        id: "s1",
        title: "Vessel Repair & Retrofit",
        body: "Afloat and drydock repairs, ballast treatment retrofits, engine overhauls — 24/7 riding squads worldwide.",
        img: IMAGES.serviceRepair,
        span: "lg:col-span-7",
        tall: true,
    },
    {
        id: "s2",
        title: "Deepwater Offshore Support",
        body: "Anchor handling, supply runs and standby cover for rigs and wind farms out to 3,000 m.",
        img: IMAGES.serviceOffshore,
        span: "lg:col-span-5",
        tall: true,
    },
    {
        id: "s3",
        title: "Fleet Management & Crewing",
        body: "Technical ops, certification and 2,400 certified crew under one flag state.",
        img: IMAGES.serviceCrewing,
        span: "lg:col-span-4",
        tall: false,
    },
    {
        id: "s4",
        title: "Shipbuilding & Conversion",
        body: "Hull 214 and counting — newbuilds, lengthenings and LNG conversions.",
        img: IMAGES.serviceShipbuilding,
        span: "lg:col-span-4",
        tall: false,
    },
    {
        id: "s5",
        title: "Technical ship management",
        body: "Planned maintenance, inspections, spares and day-to-day technical supervision of your fleet.",
        // icon: Ship,
        img: IMAGES.serviceCrewing,
        span: "lg:col-span-4",
        tall: false,
    },
    // {
    //     id: "s6",
    //     title: "Marine Logistics & Tracking",
    //     body: "Door-to-deck cargo with live AIS tracking on every Navifive charter.",
    //     img: IMAGES.serviceLogistics,
    //     span: "lg:col-span-12",
    //     tall: false,
    //     wide: true,
    // },
];



export const PORTS = ["Rotterdam", "Singapore", "Houston", "Dubai", "Gdynia", "Shanghai"];
