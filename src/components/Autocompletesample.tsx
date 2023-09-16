'use client'
import React, { useState } from 'react';

interface AutocompleteProps {
    options?: string[];
}

const colors = [
    { color: '#f25200' },
    { color: '#f25300' },
    { color: '#f25400' },
    { color: '#f25500' },
    { color: '#f25600' },
    { color: '#f25700' }
]


const AutocompleteSearchBox = ({ options }: AutocompleteProps) => {

    const [queries, setQueries] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<string[] | undefined>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setQueries(inputValue);

        const filtered = options?.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredOptions(filtered);
    };

    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Search..."
                name=''
            />
            <ul>
                {filteredOptions?.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default AutocompleteSearchBox;
