import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={logo} alt="logo" />
                <p className='my-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, soluta!
                </p>
                <p>© Evogym All rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">peter chinoko is awesome</p>
                <p className="my-5">peter chinoko is awesome</p>
                <p>Hurray!</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, totam!</p>
                <p>(333)435-6825</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer