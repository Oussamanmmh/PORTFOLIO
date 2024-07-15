export default function Contact() {
    return (
        <>
            <main className="flex flex-col items-center gap-14 justify-center bg-white w-[950px]">
                <h1 className="text-5xl font-bold text-center">
                    Get in <span className="text-purple-700">touch</span>
                </h1>
                <div className="flex  justify-center items-start gap-10 p-4">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <h1 className="text-3xl font-bold text-center">
                            Hello <span className="text-purple-700">there</span>
                        </h1>
                        <p className="font-sans text-center font-semibold">
                            Feel Free To Send Me A Message Or Reach Out To Me Whenever You Need Assistance. Your Satisfaction Is MyTop Priority
                        </p>
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="size-10 fill-purple-700">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <p className="text-2xl font-mono font-semibold">oussamacontact@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-center items-center">
                        <div className="flex gap-5">
                            <input type="text" placeholder="Your name" ></input>
                            <input type="email" placeholder="Your email"></input>
                        </div>
                        <input type="text" placeholder="Your subject" className="w-full "></input>
                        <textarea placeholder="Your message" className="h-52 w-full resize-none overflow-hidden border border-purple-700"></textarea>
                        <button className="rounded-3xl bg-gray-800 w-48 p-3 border-2 border-purple-700 text-purple-700">Send</button>
                    </div>
                </div>
            </main>
        </>
    );
}