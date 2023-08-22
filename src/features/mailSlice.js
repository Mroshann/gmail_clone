import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  sendMessage: false,
  selectMail: null,
  status: 'idle',
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
 
  reducers: {
    selectMail : (state, action) => {
      state.selectMail = action.payload;
    },
    openSendMessage: (state) => {
     
      state.sendMessage = true;
    },
    closeSendMessage: (state) => {
      state.sendMessage = false;
    },
  },
  
});



export const { openSendMessage , closeSendMessage, selectMail} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectMail;
export const selectSendMessage = (state) => state.mail.sendMessage;


export default mailSlice.reducer;
