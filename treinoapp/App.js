import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './src/components/header/Header';
import IconBars from './src/components/iconBars/IconBars';
import Workout from './src/components/workout/Workout';
import {Run, Bike} from './src/assets/images/images';

const App = () => {
  const workouts = [
    {icon: Run, title: 'Corrida', cal: 400, distance: 30, weight: 52},
    {icon: Bike, title: 'Bicicleta', cal: 630, distance: 40, weight: 52},
  ];
  return (
    <View style={{ backgroundColor: '#262f38', height: '100%' }}>
      <Header />
      <ScrollView>
        <IconBars />
        {
          workouts.map((w, index) =>
            <Workout key={index} workout={w} active={index == 1 ? true : false}/>        
          )
        }
      </ScrollView>
    </View>
  );
};

export default App;
