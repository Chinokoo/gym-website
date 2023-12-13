import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={logo} alt="logo" />
                <p className='my-5'>
                    This is a DEMO website developed by Peter Chinoko
                </p>
                <p>© Evogym All rights Reserved. coded by Peter Chinoko</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <a href="https://peter-chinoko.vercel.app/">Peter's Portfolio</a>
                <p className="my-5"><a href="https://github.com/Chinokoo">github</a></p>
                <p></p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold my-5">Call Me</h4>
                <p>+27 62 41 90 143</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer