import { SelectedPage } from "@/shared/types";
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HeaderText from "@/shared/HeaderText";


type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const {register,trigger, formState:{errors}} = useForm()
    const onSubmit = async (e:any)=>{
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }
    const inputstyles = "mb-5 w-full rounded-lg bg-primary-500 px-5 py-3 placeholder-white";

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            {/*Contact Header*/}
            <motion.div className="md:w-3/5"
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity: 0, x:-50},
                visible:{opacity:1,x:0}
            }}>
              <HeaderText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE

              </HeaderText>  
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo vero vel voluptas accusamus, dolores cum odio dicta sit, placeat rem quos facilis aliquam expedita laborum praesentium consectetur vitae. Cum, earum ab quos ratione maxime eaque aspernatur suscipit ducimus impedit minus aliquid. Omnis iste earum mollitia pariatur vitae natus nesciunt nemo nulla, asperiores suscipit aspernatur totam sequi nam? Itaque commodi nostrum repudiandae quis numquam. Aspernatur asperiores nisi quo voluptatem harum quibusdam.
              </p>
            </motion.div>
            {/*Form and Image*/}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true, amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity: 0, y:50},
                    visible:{opacity:1,y:0},
                    }}>
                        <form target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/74d0e3d52399856f02ef8d53b2afdc23"
                        method="POST">
                            <input className={inputstyles} type="text" placeholder="NAME"
                            {...register("name",{required:true, maxLength:100})} />
                            {errors.name && (<p className="mt-1 text-primary-500">
                                {errors.name.type === "required" &&"This Field is required."}
                                {errors.name.type === "maxlength" && "Max length is 100 characters"}
                            </p>)}

                            <input className={inputstyles} type="email" placeholder="EMAIL"
                            {...register("email",{required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}/>
                            {errors.email && (<p className="mt-1 text-primary-500">
                                {errors.email.type === "required" &&"This Field is required."}
                                {errors.email.type === "pattern" && "invalid email address"}
                            </p>)}

                            <textarea rows={4} cols={50} className={inputstyles} placeholder="MESSAGE"
                            {...register("message",{required:true, maxLength:2000})} />
                            {errors.message && (<p className="mt-1 text-primary-500">
                                {errors.message.type === "required" &&"This Field is required."}
                                {errors.message.type === "maxlength" && "Max length is 2000 characters"}
                            </p>)}

                            <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white ">
                                SUBMIT
                            </button>
                        </form>
                </motion.div>
                <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true, amount: 0.5}}
                transition={{delay:0.2, duration:0.5}}
                variants={{
                    hidden:{opacity: 0, y:50},
                    visible:{opacity:1,y:0},
                    }}>
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img className="w-full" src={ContactUsPageGraphic} alt="contact-us-page" />
                        </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs;