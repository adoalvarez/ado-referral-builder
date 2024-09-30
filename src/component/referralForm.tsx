
import { useEffect, useState } from "react";
import ReferralInput from "./referralInput";
import ReferralButton from "./formButtons";
import { useReferralContext } from "../context/referralContext";

interface formDataProps {
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

const ReferralForm = () => {

    const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

    const { fetchReferralData } = useReferralContext();
    
    const [givenName, setGivenName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [homeOR, setHomeOR] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [suburb, setSuburb] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [postCode, setPostCode] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const handleSubmit = () => {
        let newData: formDataProps;

        if (checkFormData()) {
            newData = {
                givenName: givenName,
                surName: surname,
                email: email,
                phone: phone,
                homeOR: homeOR,
                street: street,
                suburb: suburb,
                state: state,
                postCode: postCode,
                country: country,
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData)
            }

            fetch(BASE_API_URL + '/api/referrals', requestOptions)
            .then( res =>  res.json())
            .then( data => {
                resetState();
                fetchReferralData();
            })
        } else {
            alert("Please fillout the form")
        }
    }

    const resetState = () => {
        setGivenName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setHomeOR('');
        setStreet('');
        setSuburb('');
        setState('');
        setPostCode('');
        setCountry('');
    }

    const checkFormData = () => {
        if (
            givenName 
            && surname 
            && email 
            && phone 
            && homeOR
            && street
            && suburb
            && state
            && postCode
            && country
        ) {
            return true
        }

        return false;
    }

    return (
        <form className="px-6">
            <h2 className="border-b border-gray-300 text-gray-500 font-bold uppercase text-md">Personal Details</h2>
            <div className="flex flex-wrap">
                <ReferralInput label="Given Name" value={givenName} onType={setGivenName} className="w-[calc(50%-8px)] mr-4" />
                <ReferralInput label="Surname" value={surname} onType={setSurname} className="w-[calc(50%-8px)]" />
                <ReferralInput label="Email" value={email} onType={setEmail} className="w-[calc(50%-8px)] mr-4"/>
                <ReferralInput label="Phone" value={phone} onType={setPhone} className="w-[calc(50%-8px)]"/>
            </div>
            <h2 className="border-b border-gray-300 text-gray-500 font-bold uppercase text-md mt-2">Address</h2>
            <div className="flex flex-wrap">
                <ReferralInput label="Home Name OR #" value={homeOR} onType={setHomeOR} className="w-[calc(50%-8px)] mr-4" />
                <ReferralInput label="Street" value={street} onType={setStreet}  className="w-[calc(50%-8px)]" />
                <ReferralInput label="Suburb" value={suburb} onType={setSuburb} className="w-[calc(50%-8px)] mr-4" />
                <ReferralInput label="State" value={state} onType={setState} className="w-[calc(50%-8px)]" />
                <ReferralInput label="Postcode" value={postCode} onType={setPostCode} className="w-[calc(50%-8px)] mr-4" />
                <ReferralInput label="Country" value={country} onType={setCountry} className="w-[calc(50%-8px)]" />
            </div>
            <div className="form-buttons mt-6">
                <ReferralButton label="Upload Avatar" className="w-[calc(50%-8px)] mr-4 text-gray-500 border border-gray-400" onClick={checkFormData} />
                <ReferralButton label="Create Referral" className="w-[calc(50%-8px)] text-white bg-green-400 drop-shadow-2xl" onClick={handleSubmit}/>
            </div>
        </form>
    )
}

export default ReferralForm;