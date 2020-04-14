import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { 
    Leg,
    Line,
    Strech,
    Yoga
} from '../../assets/images/images';

export default class IconBars extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={[styles.icon, styles.first]} source={Leg} />
                <Image style={styles.icon} source={Line} />
                <Image style={styles.icon} source={Strech} />
                <Image style={styles.icon} source={Yoga} />
            </View>
        )
    }
}