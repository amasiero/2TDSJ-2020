import { BackHandler, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const INPUT_METHOD = {
    NONE: 'NONE',
    KEYBOARD: 'KEYBOARD',
    CUSTOM: 'CUSTOM',
};

export default class MessagingContainer extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        containerHeight: PropTypes.number.isRequired,
        contentHeight: PropTypes.number.isRequired,
        keyboardHeight: PropTypes.number.isRequired,
        keyboardVisible: PropTypes.bool.isRequired,
        keyboardWillShow: PropTypes.bool.isRequired,
        keyboardWillHide: PropTypes.bool.isRequired,
        keyboardAnimationDuration: PropTypes.number.isRequired,
        inputMethod: PropTypes.oneOf(Object.values(INPUT_METHOD)).isRequired,
        onChangeInputMethod: PropTypes.func,
        renderInputMethodEditor: PropTypes.func.isRequired,
    };

    static defaultProps = {
        children: null,
        onChangeInputMethod: () => {},
    }

    componentDidMount() {
        this.subscription = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                const {onChangeInputMethod, inputMethod} = this.props;

                if(inputMethod === INPUT_METHOD.CUSTOM) {
                    onChangeInputMethod(INPUT_METHOD.NONE);
                    return true;
                }
                return false;
            }
        )
    }

    componentDidUpdate(prepProps) {
        const { onChangeInputMethod } = this.props;

        if (this.props.keyboardVisible && !prepProps.keyboardVisible) {
            onChangeInputMethod(INPUT_METHOD.KEYBOARD);
        } else if (!this.props.keyboardVisible && prepProps.keyboardVisible &&
            this.props.inputMethod !== INPUT_METHOD.CUSTOM) {
            onChangeInputMethod(INPUT_METHOD.NONE);
        } 
    }

    render() {
        const {
            children,
            containerHeight,
            contentHeight,
            keyboardHeight,
            keyboardWillShow,
            keyboardWillHide,
            inputMethod,
            renderInputMethodEditor,
        } = this.props;

        const useContentHeight = keyboardWillShow || inputMethod === INPUT_METHOD.KEYBOARD;

        const containerStyle = {
            height: useContentHeight ? contentHeight : containerHeight,
        };

        const showCustomInput = inputMethod === INPUT_METHOD.CUSTOM && !keyboardWillShow;

        const keyboardIsHidden = inputMethod === INPUT_METHOD.NONE && !keyboardWillShow;

        const keyboardIsHiding = INPUT_METHOD.KEYBOARD && keyboardWillHide;

        const inputStyle = {
            height: showCustomInput ? keyboardHeight || 250 : 0,
            marginTop: isIphoneX() && (keyboardIsHidden || keyboardIsHiding) ? 24 : 0,
        };

        return (
            <View style={containerStyle}>
                {children}
                <View style={inputStyle}>
                    {renderInputMethodEditor()}
                </View>
            </View>
        );
    }

}