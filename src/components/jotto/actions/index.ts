import React from 'react';
import axios from 'axios';

type funcType = (setSecretWord: string) => void;

export const getSecretWord = async (setSecretWord: funcType) => {
  const response = await axios.get('http://localhost:3030');
  setSecretWord(response.data);
};
