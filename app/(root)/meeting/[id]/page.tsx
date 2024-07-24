"use client"

import MeetingRoom from '@/components/MeetingRoom';
import Loader from '@/components/ui/Loader';
import MeetinSetup from '@/components/ui/MeetinSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useState } from 'react';

const Meeting = ({params: {id}} : { params : { id: string } }) => {

  const {user, isLoaded} = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const {calls, isCallLoading} = useGetCallById(id)

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <main className='h-screen w-full'>
      <StreamCall call={calls}>
        <StreamTheme>
            {
              !isSetupComplete ? (
                <MeetinSetup setIsSetupComplete={setIsSetupComplete}/>
              ) : (
                <MeetingRoom />
              )
            }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting