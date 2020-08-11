import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ToolbarButton = ({ icon, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>
            <Icon name={icon} size={28} color='grey' />
        </Text>
    </TouchableOpacity>
);

ToolbarButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}


export default class Toolbar extends React.Component {
    static propTypes = {
        isFocused: PropTypes.bool.isRequired,
        onChangeFocus: PropTypes.func,
        onSubmit: PropTypes.func,
        onPressCamera: PropTypes.func,
        onPressLocation: PropTypes.func,
    }

    static defaultProps = {
        onChangeFocus: () => {},
        onSubmit: () => {},
        onPressCamera: () => {},
        onPressLocation: () => {},
    }

    state = {
        text: '',
    };

    setInputRef = (ref) => {
        this.input = ref;
    };

    componentDidUpdate(prevProps) {
        if (this.props.isFocused !== prevProps.isFocused) {
            if (this.props.isFocused) {
                this.input.focus();
            } else {
                this.input.blur();
            }
        }
    }

    handleFocus = () => {
        const { onChangeFocus } = this.props;
        onChangeFocus(true);
    };

    handleBlur = () => {
        const { onChangeFocus } = this.props;
        onChangeFocus(false);
    };

    handleChangeText = (text) => {
        this.setState({ text });
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
        this.setState({ text : '' });
    };

    render() {

        const { onPressCamera, onPressLocation } = this.props;
        const { text } = this.state;

        return (
            <View style={styles.toolbar}>
                <ToolbarButton icon={'camera-iris'} onPress={onPressCamera} />
                <ToolbarButton icon={'map-marker'} onPress={onPressLocation} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholder={'Digite uma mensagem'}
                        blurOnSubmit={false}
                        value={text}
                        onChangeText={this.handleChangeText}
                        onSubmitEditing={this.handleSubmitEditing}
                        // Propriedades Adicionais
                        ref={this.setInputRef}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingLeft: 16,
        backgroundColor: 'white',
    },
    button: {
        top: -2,
        marginRight: 12,
        fontSize: 20,
        color: 'grey'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.04)',
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
});