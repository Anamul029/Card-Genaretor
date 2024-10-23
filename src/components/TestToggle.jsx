import { useState } from "react";
import Standard from "./Standard";
import IdCard from "./IdCard";

const TestToggle = () => {
    const [viewMode, setViewMode] = useState('standard'); // 'standard' or 'idCard'

    const toggleView = (mode) => {
        setViewMode(mode);
    };
    return (
        <div>
            <button onClick={() => toggleView('standard')}>←</button>
            <button onClick={() => toggleView('idCard')}>→</button>

            {viewMode === 'standard' ? (
                <Standard></Standard>
            ) : (
                // <IDCardDisplayComponent />
                <IdCard></IdCard>
            )}
        </div>
    );

};

export default TestToggle;