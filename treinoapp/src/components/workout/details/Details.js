import React from 'react';
import { View, Text, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faRuler, faWeight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

export default class Details extends React.Component {
    render() {
        const { workout } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{workout.title}</Text>
                <View style={styles.infos}>
                    <FontAwesomeIcon 
                        icon={faDumbbell} 
                        size={16}
                        style={{color: '#fd3c29'}}/>
                    <Text style={styles.info}>{workout.cal} kcal</Text>
                    <FontAwesomeIcon 
                        icon={faRuler} 
                        size={16}
                        style={{color: '#19b996'}}/>
                    <Text style={styles.info}>{workout.distance} m</Text>
                    <FontAwesomeIcon 
                        icon={faWeight} 
                        size={16}
                        style={{color: '#ffc636'}}/>
                    <Text style={styles.info}>{workout.weight} kg</Text>
                </View>
                <View style={styles.containerDays}>
                    <Text style={[styles.day, this.props.active ? styles.active : {} ]}>Hoje</Text>
                    <Text style={styles.day}>Ontem</Text>
                </View>
            </View>
        )
    }
}