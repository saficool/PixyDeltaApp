export class SideMenubarList {
    title!: string;
    description!: string;
    keywords!: string;
    route!: string;
    styleClass!: string;
    styleCss!: string;
    icon!: string;
    tooltip!: string;
    order!: number;
    children!: Child[];
}

export class Child {
    title!: string;
    description!: string;
    keywords!: string;
    route!: string;
    icon!: string;
    order!: number;
}