import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListCount } from '../selector'

const Statistic = () => {
    const count = useRecoilValue(todoListCount)
    return (
        <p>Count: {count} </p>
    )
}
export default Statistic;
