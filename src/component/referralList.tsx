import { useEffect, useState } from 'react';
import { IoPencilSharp, IoTrash } from 'react-icons/io5';
import { useReferralContext } from '../context/referralContext';


const ReferralList = () => {
    const {listData, fetchReferralData} = useReferralContext();

    useEffect( () => {
        fetchReferralData();

    }, [])

    return (
        <div className="px-6 lg:mt-0 mt-6">
            <table className="w-full text-gray-500">
                <thead>
                    <tr className="text-left uppercase text-sm border-b border-gray-300">
                        <th className="w-[25%]">Given name</th>
                        <th className="w-[25%]">Surname</th>
                        <th className="w-[25%]">Email</th>
                        <th className="w-[15%]">Phone</th>
                        <th className="w-[5%] font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { listData && listData.map( ( data: any, idx: any ) => 
                        <tr className="border-b border-gray-300" key={idx}>
                            <td>{data.givenName}</td>
                            <td>{data.surName}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                                <span>
                                    <button><IoPencilSharp /></button>
                                    <button><IoTrash /></button>
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ReferralList;