const NotFound = () => {
    return (
        <section className="page_404 bg-white py-10 font-serif">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full sm:w-10/12 text-center">
                        <div className="four_zero_four_bg bg-cover bg-center h-96" style={{ backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)" }}>
                            <h1 className="text-6xl font-medievalSharp text-center">404</h1>
                        </div>
                        <div className="contant_box_404">
                            <h3 className="font-medievalSharp text-4xl">
                                Look like you're lost
                            </h3>
                            <p className="mt-4 font-medievalSharp">the page you are looking for not available!</p>
                            <a href="/#home" className="button link_404 inline-block px-8 py-4  rounded-md bg-secondary text-white font-medievalSharp mt-8">Go to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default NotFound;