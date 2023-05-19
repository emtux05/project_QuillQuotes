"use client";

import Form from '@components/Form';
import RequireAuthentication from '@utils/auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react'


const CreatePrompt = () => {

    const router = useRouter();
    const {data: session, status} = useSession();
    console.log("status", status, session)

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                })
            })
                if(response.ok) {
                    router.push('/');
                }
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false)
        }
    }

  return (
    <>
    <RequireAuthentication router={router}>
    <Form
        type="Create"
        post={post}
        setPost= {setPost}
        submitting= {submitting}
        handleSubmit= {createPrompt}
    />
    </RequireAuthentication>
    </>
  )
}

export default CreatePrompt