
interface ButtonType {
    label: string,
    className?: string,
    type?: "button" | "reset" | "submit",
    onClick?: (data?: any) => void;
}

const ReferralButton = (props: ButtonType) => {

    const { label, className, type, onClick } = props;

    const handleOnClick = (e: any) => {
        if (onClick) onClick(); 
    }   

    return (
        <button 
            className={`p-3 border font-bold rounded-lg + ${className}`} 
            type={type != undefined ? type : 'button'} 
            onClick={handleOnClick}
        >
            {label}
        </button>
    )
}

export default ReferralButton;