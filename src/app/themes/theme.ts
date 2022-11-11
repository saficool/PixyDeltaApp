import { Theme } from "../interfaces/theme.interface";

export const DefaultLight: Theme = {
    name: "Default Light",
    properties: {
        "--first": "#F7FBFC",
        "--second": "#D6E6F2",
        "--third": "#B9D7EA",
        "--fourth": "#769FCD",
        "--text-color": "#FFFFFF",
        "--border-color": "#F5F5F5"
    }
};

export const DefaultDark: Theme = {
    name: "Default Dark",
    properties: {
        "--first": "#647689",
        "--second": "#5A6A7B",
        "--third": "#6B7C8A",
        "--fourth": "#44505c",
        "--text-color": "#FFFFFF",
        "--border-color": "#44505c"
    }
};
