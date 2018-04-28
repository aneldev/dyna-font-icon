import * as React from "react";
import "./DynaFontIcon.less";
export interface IDynaFontIconProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    fontType?: EFontType;
    fontClassName: string;
}
export declare enum EFontType {
    FONT_AWESOME_V4 = "FONT_AWESOME_V4",
}
export interface IDynaFontIconState {
    fontSize: string;
}
export declare class DynaFontIcon extends React.Component<IDynaFontIconProps, IDynaFontIconState> {
    static defaultProps: IDynaFontIconProps;
    private readonly className;
    refs: {
        container: HTMLDivElement;
    };
    constructor(props: IDynaFontIconProps);
    componentWillReceiveProps(nextProps: IDynaFontIconProps): void;
    componentDidMount(): void;
    setFontSize(): void;
    private renderFA4();
    private renderIcon();
    render(): JSX.Element;
}
