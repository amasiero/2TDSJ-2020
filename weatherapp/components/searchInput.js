import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChangeText = text => {
        this.setState({ text });
    }

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if(!text) return;

        onSubmit(text);
        this.setState({ text: '' });
    }

    render() {

        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={placeholder}
                    placeholderTextColor='white'
                    style={styles.textInput}
                    value={text}
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(102, 102, 102, .1)',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textInput: {
        color: 'white',
        flex: 1
    }
});