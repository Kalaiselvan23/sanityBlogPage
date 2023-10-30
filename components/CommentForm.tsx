'use client'
import post from "@/medium-clone/schemas/post";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
type formInput = {
    _id: string,
    name: string,
    email: string,
    comment: string,
}
const CommentForm = ({ postId }: { postId: string }) => {
    const { register, handleSubmit, watch } = useForm<formInput>();
    const [submitted, setSubmitted] = useState<boolean>(false)
    const onSubmit: SubmitHandler<formInput> = (data) => {
        fetch("/api/createComment", {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(res => {
                return res.json()
            }).then(res => {
                setSubmitted(true);
                return res;
            })
            .catch(err => { console.log(err) })
    }
    return <div>
        {!submitted?<form className='bg-orange-300 flex flex-col p-4 w-full rounded-md gap-3 my-2' onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register('_id')} value={postId} />
        <label htmlFor='name'>
            <p>Name</p>
            <input id='name' className='form-inputs' {...register("name", { required: true })} placeholder='' type='text' />
        </label>
        <label htmlFor='email'>
            <p>Email</p>
            <input id='email' className='form-inputs' {...register("email", { required: true })} placeholder='' type='email' />
        </label>
        <label htmlFor='comments'>
            <p>Comment</p>
            <textarea id='comments' className='form-inputs' {...register("comment", { required: true })} placeholder='' />
        </label>
        <button className='btn w-fit mx-auto h-fit'>Submit</button>
    </form>:<div className="bg-orange-300 text-white font-semibold p-3">
        <h3>Thank you for submitting the Comments!!!</h3>
        </div>}
    </div>
}

export default CommentForm
