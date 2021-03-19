import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { theme } from '../../constants/colors';
import { fontSize, normal, italic } from '../../constants/typography';

interface Props extends TextProps {
	fontWeight?: keyof typeof normal;
	italic?: boolean;
	size?: keyof typeof fontSize;
	style?: TextStyle;
	status?: 'primary' | 'success' | 'warning' | 'info' | 'danger';
}

const StyledText: React.FC<Props> = (props: Props) => {
	const font = () => {
		if (props.italic) {
			if (props.fontWeight) {
				return italic[props.fontWeight];
			}
			return italic.regular;
		} else {
			if (props.fontWeight) {
				return normal[props.fontWeight];
			}
			return normal.regular;
		}
	};

	const size = () => {
		if (props.style?.fontSize) {
			return props.style?.fontSize;
		} else {
			return props.size ? fontSize[props.size] : fontSize.lg;
		}
	};

	return (
		<Text
			{...props}
			style={{
				...props.style,
				fontFamily: font(),
				fontSize: size(),
				color: props.status
					? theme[props.status]
					: props.style?.color
					? props.style?.color
					: theme.black,
			}}
		/>
	);
};

export default StyledText;