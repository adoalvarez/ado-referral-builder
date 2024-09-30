import React from 'react';
import ReferralForm from './component/referralForm';
import { ReferralProvider } from './context/referralContext';
import ReferralList from './component/referralList';

function Main() {
  return (
    <ReferralProvider>
      <div className="Main-content">
          <div className="Main-container">
            <h1 className="text-black font-bold text-3xl px-6 mt-2">Referral Builder</h1>
            <div className="flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                <ReferralForm />
              </div>
              <div className="lg:w-1/2 w-full">
                <ReferralList />
              </div>
            </div>
            
          </div>
      </div>
    </ReferralProvider>
  );
}

export default Main;
