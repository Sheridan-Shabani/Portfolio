import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faMapPin} from "@fortawesome/free-solid-svg-icons";
import {useForm, SubmitHandler} from "react-hook-form";
import {Profile} from "@/types/Profile";

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
};

export const Contact = (props : {profile:Profile}) => {
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(
        window.location.href = `mailto:${props.profile.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    );
    const parseLines = (value:string) => value.replaceAll(/(\\n)/g, "\n");
    return (
        <div
            className={"h-screen flex relative flex-col text-center md-text-left md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-16 uppercase text-[#0075af] tracking-[20px] text-2xl lg:hidden"}>
                Contact
            </h3>

            <div className={"flex flex-col space-y-2 md:space-y-10 w-4/5 md:w-auto"}>
                <h4 className={"text-xl md:text-4xl font-semibold text-center"}>
                    I have got just what you need. {" "}
                    <span className={"underline decoration-[#0075af]/50"}>
                        Lets Talk.
                    </span>
                </h4>

                <div className={"space-y-2 md:space-y-10"}>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <FontAwesomeIcon icon={faPhone} size={"lg"} color={"#0075af"} fade/>
                        <p className={"text-base md:text-2xl"}>{props.profile.phoneNumber}</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <FontAwesomeIcon icon={faEnvelope} size={"lg"} color={"#0075af"} fade/>
                        <p className={"text-base md:text-2xl"}>{props.profile.email}</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <FontAwesomeIcon icon={faMapPin} size={"lg"} color={"#0075af"} fade/>
                        <p className={"text-base md:text-2xl whitespace-pre-line"}>{parseLines(props.profile.address)}</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={"flex flex-col space-y-2 w-full md:w-fit mx-auto"}>
                    <div className={"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"}>
                        <input {...register('name', { required: true })} placeholder={"Name"} className={"contactInput"} type={"text"}/>
                        <input {...register('email', { required: true })} placeholder={"Email"} className={"contactInput"} type={"email"}/>
                    </div>
                    <input {...register('subject', { required: true })}
                           placeholder={"Subject"} className={"contactInput"} type={"text"}/>
                    <textarea
                        {...register('message', { required: true })}
                        placeholder={"Message"} className={"contactInput"}/>
                    <button
                        type={"submit"}
                        className={"bg-[#0075af] py-2 md:py-5 md:px-10 rounded-md text-black font-bold"}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}