import React from 'react';
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

import { MessageShape } from '../utils/MessageUtils';

const keyExtractor = item => item.id.toString();

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };

    static defaultProps = {
        onPressMessage: () => {},
    };

    renderMessageItem = ({ item }) => {
        const {onPressMessage} = this.props;

        return(
            <View key={ item.id } style={ styles.messageRow }>
                <TouchableOpacity onPress={ () => onPressMessage(item) }>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        );
    };

    renderMessageBody = ({type, text, uri, coordinate}) => {
        switch (type) {
            case 'text':
                return (
                    <View style={styles.messageBubble}>
                        <Text style={styles.text}>{ text }</Text>
                    </View>
                );
            case 'image':
                return <Image style={styles.image} source={{ uri }} />;
            case 'location':
                return (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            ...coordinate,
                            latitudeDelta: 0.08,
                            longitudeDelta: 0.04,
                        }}
                    >
                        <MapView.Marker coordinate={coordinate} />
                    </MapView>
                );
        }
    }

    render() {
        const {messages} = this.props;

        return (
            <FlatList
                style={styles.container}
                inverted
                data={messages}
                renderItem={this.renderMessageItem}
                keyExtractor={keyExtractor}
                keyboardShouldPersistTaps={'handled'}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible',
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 4,
        marginRight: 10,
        marginLeft: 60,
    },
    messageBubble: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(16, 135, 255)',
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    map: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
});