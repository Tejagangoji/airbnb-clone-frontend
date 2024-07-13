import React, { useContext } from 'react';

const Sample = React.createContext();

export const useSample = () => {
    return useContext(Sample);
};

export default function Context({ children }) {
    return (
        <Sample.Provider value={"sample"}>
            {children}
        </Sample.Provider>
    )
}
