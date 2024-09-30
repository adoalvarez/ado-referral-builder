import { createContext, ReactNode, useContext, useState } from "react";

interface PersonalDataType {
    givenName: string,
    surName: string,
    email: string,
    phone: string,
    homeOR: string,
    street: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
}

interface ReferralContextType {
    listData: Array<PersonalDataType>,
    setListData: (data: Array<PersonalDataType>) => void;
    fetchReferralData: () => void;
}

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const ReferralContext = createContext<ReferralContextType | undefined>(undefined);

export const ReferralProvider = ({ children } : {children : ReactNode}) => {

    const [listData, setListData] = useState<Array<PersonalDataType>>([])

    const fetchReferralData = async () => {
        const response = await fetch(BASE_API_URL + '/api/referrals')
        const data = await response.json();
        setListData(data);
    }

    return (
        <ReferralContext.Provider 
        value={{
            listData,
            setListData,
            fetchReferralData
        }}>
            {children}
        </ReferralContext.Provider>
    )
}

export const useReferralContext = () => {
    const referral = useContext(ReferralContext);

    if (referral === undefined) {
        throw new Error('useReferralContext must be used with ReferralContext');
    }

    return referral;
}
