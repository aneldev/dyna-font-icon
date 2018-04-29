import * as React from "react";
import {CSSProperties} from "react";
import {round} from "dyna-loops";

import "./DynaFontIcon.less";

export interface IDynaFontIconProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	fontType?: EFontType;
	fontClassName: string;
}

export enum EFontType {
	FONT_AWESOME = "FONT_AWESOME",
}

export interface IDynaFontIconState {
	fontSize: string;
}

export class DynaFontIcon extends React.Component<IDynaFontIconProps, IDynaFontIconState> {
	static defaultProps: IDynaFontIconProps = {
		className: "",
		fontType: EFontType.FONT_AWESOME,
		fontClassName: null,
	};

	private readonly className: string = "dyna-font-icon";

	public refs: {
		container: HTMLDivElement;
	};

	constructor(props: IDynaFontIconProps) {
		super(props);
		this.state = {
			fontSize: null,
		};
	}

	public componentWillReceiveProps(nextProps: IDynaFontIconProps): void {
		if (
			nextProps.className !== this.props.className ||
			nextProps.fontClassName !== this.props.fontClassName ||
			nextProps.style !== this.props.style
		) {
			setTimeout(()=>{
				this.setFontSize();
			},1); // give it a tick, the dom is not changed
		}
	}

	public componentDidMount(): void {
		this.setFontSize();
	}

	public setFontSize(): void {
		const computedStyle: CSSStyleDeclaration = getComputedStyle(this.refs.container);
		const width = round(parseFloat(computedStyle.width), 2);
		const height = round(parseFloat(computedStyle.height), 2);
		const fontSize: number = width > height ? height : width;
		this.setState({fontSize: `${fontSize}px`});
	}

	private renderFA(): JSX.Element {
		const {fontClassName} = this.props;
		const {fontSize} = this.state;
		const style: CSSProperties = {
			fontSize,
		};
		return (
			<span
				className={fontClassName}
				style={style}
				aria-hidden="true"
			/>
		);
	};

	private renderIcon(): JSX.Element {
		const {fontType} = this.props;
		switch (fontType) {
			case EFontType.FONT_AWESOME:
				return this.renderFA();
		}
	}

	public render(): JSX.Element {
		const {
			className: userClassName,
		} = this.props;

		const className: string = [
			this.className,
			userClassName,
		].join(' ').trim();


		const style: CSSProperties = {
			...(this.props.style || {}),
			fontSize: "0",
		};

		const props: any = {...this.props};
		delete props.className;
		delete props.fontType;
		delete props.fontClassName;
		delete props.style;

		return (
			<div
				className={className}
				{...props}
				ref="container"
				style={style}
			>
				{this.renderIcon()}
			</div>
		);
	}
}
