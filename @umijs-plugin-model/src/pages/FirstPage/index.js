import React from 'react'
import { useModel } from '../../plugin/plugin-model/useModel';
export default () => {
  const { initialState } = useModel('@@initialState') || { };
  const { userName } = initialState || {}
  return (
    <span>{ userName || 'NULL' }</span>
  );
};