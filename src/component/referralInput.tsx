import { useState, ChangeEvent } from 'react'

interface ReferralInputProps {
    label: string,
    value: string,
    onType: (e: string) => void,
    className?: string,
}

const ReferralInput = (props: ReferralInputProps) => {
    const {label, value, onType, className} = props;

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => { 
        onType(e.target.value);
    }

    return (
        <div className={className}>
            <label className="uppercase text-xs text-gray-400">{label}</label>
            <input value={value} type="text" onChange={handleValue} className="w-full border-gray-400 border p-2 text-xs rounded"/>
        </div>
    )
}

export default ReferralInput;