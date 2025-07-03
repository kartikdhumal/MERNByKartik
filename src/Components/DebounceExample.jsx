import React, { useState, useCallback } from 'react';

function DebounceExample() {
    const [value, setValue] = useState('');
    const [debouncedVal, setDebouncedVal] = useState('');

    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    const debouncedInput = useCallback(
        debounce((input) => {
            setDebouncedVal(input);
        }, 500),
        []
    );

    const handleChange = (e) => {
        setValue(e.target.value);
        debouncedInput(e.target.value);
    };

    return (
        <div className="live-example">
            <h3>Live Debounce Example</h3>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Type to search..."
                className="debounce-input"
            />
            {(value || debouncedVal) && (
                <>
                    <p>Typed Value: {value}</p>
                    <p>Debounced API Value: {debouncedVal}</p>
                </>
            )}

        </div>
    );
}

export default DebounceExample;
