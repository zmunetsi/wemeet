import { Link, Head } from '@inertiajs/inertia-react';
import { Button } from 'primereact/button';

export default function Home(props) {
    return (
        <>
            <Head title="Home page" />
            <div className="grid grid-nogutter surface-section text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Find a mentor</span>
                        <div className="text-6xl text-primary font-bold mb-3">It's FREE!</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Find someone who has walked the path before to walk with you.</p>

                        <Button label="Get started" type="button" className="mr-3 p-button-raised"></Button>
                        <Button label="How it works" type="button" className="p-button-outlined"></Button>
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <img src="/images/home-header.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>

        </>
    );
}
