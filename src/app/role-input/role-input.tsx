"use client"
import React, { useState } from 'react';
import CustomInput from './input';
import { useRouter } from 'next/navigation';
import { useChat } from 'ai/react';
import convertStringToJson from '../utilities/string_to_json';
import { toast } from '@/components/ui/use-toast';
import LoadingIndicator from '@/components/loading-indicator';
import ContinueButton from '@/components/continue-button';
import { useBoundStore } from '@/stores/bound.store';
import LoadingButton from '@/components/ui/loading-button';

export interface Role {
  role_name: string;
  description: string;
}

export function RoleInput() {
  const router = useRouter();
  const { setSuggestedRolesData, setCurrentRole, setSelectedRole, SuggestedRolesData } = useBoundStore();
  const { isLoading, data, handleSubmit: chatHandleSubmit, setInput } = useChat({
    onFinish: (data: any) => {
      console.log('1) Raw Data', data.content);
      const conversion = convertStringToJson(data.content);
      if (conversion === null) {
        toast({
          variant: "destructive",
          description: "An error occurred, try submitting again",
        });
        console.log('Error converting string to JSON');
        return;
      }

      setSuggestedRolesData(conversion);

      // TODO: Revise this
      const currentRole: Role = {
        role_name: role1,
        description: '' 
      };

      const selectedRole: Role = {
        role_name: role2,
        description: '' 
      };

      setCurrentRole(currentRole);
      setSelectedRole(selectedRole);

      console.log('2) Data in provider/chatstore.tsx');
      console.log(SuggestedRolesData);

      router.push('/show-roles');
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        description: "An error occurred",
      });
      console.log(error);
    },
    body: { response_format: { type: "json_object" } },
  });

  const [role1, setRole1] = useState('');
  const [role2, setRole2] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (role1 === '' || role2 === '') {
      toast({
        title: "Missing information",
        variant: "destructive",
        description: "Please enter both roles",
      });
      return;
    }

    console.log('Sending to Skillsync ChatFunction');

    setInput(`You are a professional recommender for job retraining. Your task is to suggest alternative job roles for a client who is currently employed and seeking a career transition. Provide a list of 7 suitable job roles and a 1 line role description. Present this information in a JSON format with the structure: { roles: [{ role_name: role name, description: insert one line role description}] }. Respond only with the JSON file content and refrain from additional commentary. Your Client: "  I am a ${role1} and I am interested in transitioning to ${role2}`);
    chatHandleSubmit(event);
    console.log('Sent to Skillsync ChatFunction');
  };

  const handleInputChange1 = (value: string) => {
    setRole1(value);
  };

  const handleInputChange2 = (value: string) => {
    setRole2(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <h1 className="font-neue-haas font-normal tracking-wide text-gray-800 text-3xl leading-tight">
          I&apos;m a <span><CustomInput value={role1} onInputChange={handleInputChange1} /></span> looking to transition into <span><CustomInput value={role2} onInputChange={handleInputChange2} /></span>
        </h1>
        {isLoading ? <LoadingButton></LoadingButton> : <ContinueButton type="submit" number="2"/> }
      </form>
    </>
  );
}

export default RoleInput;
