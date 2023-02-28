import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent =  {
    _id: new Date().getTime(),
    title: 'cumple del eje',
    notes: 'hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(),2),
    bgColor: '#fafafa',
    user: {
        _id:'123',
        name: 'alberth'
    }
};

export const calendarSlice = createSlice({
name: 'calendar',
initialState: {
    events: [
        tempEvent
    ],
    activeEvent: null
},
 reducers: {
    onSetActiveEvent: (state , {payload}) => {
        state.activeEvent = payload;
    }
}
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;