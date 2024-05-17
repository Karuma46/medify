import "./App.scss";
import sky from "./assets/sky.jpg";
import yoga from "./assets/yoga.jpg";
import yoga2 from "./assets/yoga2.jpg";
import iphone from "./assets/iphone.jpg";
import iphones from "./assets/iphones.png";
import nytimes from "./assets/nytimes.png";

function App() {
	return (
		<>
			<header className="flex justify-between items-center w-full h-16 px-8">
				<h1 className="text-2xl font-semibold">Medify</h1>
				<div className="justify-around gap-8 text-sm hidden lg:flex">
					<span>Sleep</span>
					<span>Stress & Anxiety</span>
					<span>Meditations</span>
					<span>Courses</span>
					<span>App Membership</span>
				</div>
				<div className="hidden lg:block">
					<div className="flex justify-center items-center gap-8">
						<p className="text-sm">Login</p>
						<button className="text-sm bg-black text-white px-4 py-2 rounded-[96px]">
							Try Medify for Free
						</button>
					</div>
				</div>
				<div className="block lg:hidden">
					<span>
						<i className="fas fa-bars fa-lg"></i>
					</span>
				</div>
			</header>

			<section className="w-full px-8 mt-4 lg:mb-24 relative">
				<div className="w-full h-[90vh] lg:h-[80vh] rounded-2xl px-8 py-16 flex">
					<div className="w-full md:w-[50vw] lg:w-[40vw] flex flex-col gap-8 justify-end md:justify-center">
						<h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-30">
							Your All-In-One App for Better Sleep to Change your
							Life.
						</h1>
						<p className="text-sm md:text-lg lg:text-xl mt-8">
							Our app puts the tools to feel better in your back
							pocket, with personalized content to transform your
							sleep, well being, and all-in-one wellness app.
						</p>
						<div className="flex flex-wrap mt-8 justify-start gap-8">
							<button className="w-full md:w-auto text-sm bg-black text-white px-4 py-2 rounded-[96px]">
								Try Medify for Free
							</button>
							<button className="w-full md:w-auto text-sm border border-black px-4 py-2 rounded-[96px]">
								Download App
							</button>
						</div>
					</div>
				</div>
				<div className="absolute w-full h-full px-8 -z-10 top-0 left-0 overflow-hidden">
					<div className="w-full h-full rounded-2xl overflow-hidden">
						<img
							src={sky}
							alt="A picture of the sky"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="absolute hidden lg:block right-8 bottom-0 -mb-20">
					<img src={iphones} alt="" className="w-[45vw]" />
				</div>
				<div className="absolute md:hidden left-[50%] -translate-x-[50%] top-4 -mb-20 md:top-0 md:bottom-0">
					<img src={iphones} alt="" className="w-[40vw]" />
				</div>
			</section>

			<section className="my-16">
				<div className="w-full md:w-[70vw] mx-auto px-8 py-16 text-center">
					<p className="text-3xl md:text-4xl lg:text-6xl font-light">
						Join over a million people who love Medify
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center gap-24 w-full md:w-[90vw] lg:w-[70vw] mx-auto justify-between py-8">
					<div className="w-[60vw] text-center">
						<h2 className="text-4xl leading-10">
							8M<span className>+</span>
						</h2>
						<h3 className="text-sm font-bold leading-8">
							Community Members
						</h3>
						<p className="text-sm">
							Join a big, empowered community of supportive
							members and coaches.
						</p>
					</div>
					<div className="w-[60vw] text-center">
						<h2 className="text-4xl leading-10">
							250M<span className>+</span>
						</h2>
						<h3 className="text-sm font-bold leading-8">
							Minutes spend in self-care
						</h3>
						<p className="text-sm">
							Every year, hundreds of millions of minutes are
							spent in meditation & listening to experts on
							Medify.
						</p>
					</div>
					<div className="w-[60vw] text-center">
						<h2 className="text-4xl leading-10">
							24,000<span className>+</span>
						</h2>
						<h3 className="text-sm font-bold leading-8">
							Exclusive Tracks
						</h3>
						<p className="text-sm">
							Get Unlimited, access to Medify's exclusive library
							of wellness tracks.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full px-8 py-16">
				<div className="flex flex-col-reverse lg:flex-row gap-16 w-full mx-auto h-full items-center">
					<div className="flex-1 px-8">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							Find peace every day with one app for you whole
							well-being
						</h2>
						<p className="text-sm md:text-lg lg:text-xl leading-8 mt-4">
							There is no one size fits all solution to mental
							well-being. Medify is the first all-in-one wellness
							app that learns how best to help you.
						</p>
						<p className="text-sm md:text-lg lg:text-xl leading-8 mt-4">
							Discover the profound impact of mindfullness through
							our members' personal stories. From easing pain to
							cultivating inner peace, mindfullness has touched
							and transformed so many aspects of their lives.
							<br />
						</p>
						<p className="text-sm md:text-lg lg:text-xl leading-8 mt-4">
							With Medify's personalized recommendation, you can
							find peace every monring, day and night.
						</p>
						<button className="text-sm bg-black text-white px-4 py-2 rounded-[96px] mt-8">
							Learn More
						</button>
					</div>
					<div className="w-full lg:w-[50%] h-[50vh] lg:h-[70vh] bg-gray-500 rounded-xl overflow-hidden">
						<img
							src={yoga}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			<section className="w-full px-8 py-16">
				<div className="flex flex-col-reverse lg:flex-row gap-16 w-full mx-auto h-full items-center">
					<div className="fw-full lg:w-[50%] h-[50vh] lg:h-[70vh] bg-gray-500 rounded-xl overflow-hidden">
						<img
							src={iphone}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1 px-8">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							The best sleep of your life is just the start
						</h2>
						<p className="text-sm md:text-lg lg:text-xl leading-8 mt-4">
							From meditations to stories to cognitive behavioural
							therapy(CBT), find everything you need for your
							wellbeing in one app
						</p>
						<p className="text-sm md:text-lg lg:text-xl leading-8 mt-4">
							Rather than making meditation and wellness more
							items on your to-do list, we make it easily fit into
							your everyday life - and we like to think we do it
							with a sense of humor.
							<br />
						</p>
						<button className="text-sm bg-black text-white px-4 py-2 rounded-[96px] mt-8">
							Download App
						</button>
					</div>
				</div>
			</section>

			<section className="w-full py-16 px-4 bg-gray-100">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mx-auto">
					Trusted by the best in the business
				</h2>
				<div className="mx-auto flex flex-wrap justify-center gap-16 py-8">
					<div className="w-36 h-20 flex items-center overflow-hidden">
						<img
							src={nytimes}
							alt=""
							className="w-full object-contain"
						/>
					</div>
					<div className="w-36 h-20 flex items-center overflow-hidden">
						<img
							src={nytimes}
							alt=""
							className="w-full object-contain"
						/>
					</div>
					<div className="w-36 h-20 flex items-center overflow-hidden">
						<img
							src={nytimes}
							alt=""
							className="w-full object-contain"
						/>
					</div>
					<div className="w-36 h-20 flex items-center overflow-hidden">
						<img
							src={nytimes}
							alt=""
							className="w-full object-contain"
						/>
					</div>
				</div>
			</section>

			<section className="w-full h-[50vh] lg:h-[70vh] relative flex flex-col justify-center">
				<div className="w-full md:w-[70vw] lg:w-[50vw] px-8 pt-16 text-white">
					<p className="text-md lg:text-xl leading-9">
						"I use it every night when i go to bed and it ALWAYS
						helps me fall asleep, whether i'm listening to a guided
						meditation or nature sounds. Every Single Time. For me,
						that is HUGE, as i've struggled with insomnia for
						years."
					</p>
					<p className="font-bold text-lg lg:text-2xl my-4">
						Cooper Bergson
					</p>
				</div>
				<div className="flex px-8 py-8 items-center gap-4 text-white">
					<div className="w-8 h-8 border border-white rounded-full flex justify-center items-center">
						<span>
							<i className="fas fa-angle-left"></i>
						</span>
					</div>
					<div className="w-8 h-8 border border-white rounded-full flex justify-center items-center">
						<span>
							<i className="fas fa-angle-right"></i>
						</span>
					</div>
				</div>

				<div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black to-transparent -z-10 opacity-60"></div>
				<div className="absolute w-full h-full top-0 left-0 flex overflow-hidden -z-20">
					<img
						src={yoga2}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</section>

			<section className="w-full md:w-[80vw] lg:w-[50vw] mx-auto py-16">
				<div className="mx-auto text-center">
					<p className="text-3xl md:text-4xl lg:text-5xl  font-light ">
						Frequently Asked Questions
					</p>
				</div>

				<div className="mx-auto w-full md: px-8">
					<div className="my-8">
						<div className="flex border-b py-4 justify-between">
							<p className="text-md md:text-lg">
								What is Medify?
							</p>
							<span>
								<i className="fas fa-chevron-down fa-xs"></i>
							</span>
						</div>

						<div className="flex border-b py-4 justify-between">
							<p className="text-md md:text-lg">
								Where should i get started once i download the
								app?
							</p>
							<span>
								<i className="fas fa-chevron-down fa-xs"></i>
							</span>
						</div>

						<div className="flex border-b py-4 justify-between">
							<p className="text-md md:text-lg">
								What devices support the Medify App?
							</p>
							<span>
								<i className="fas fa-chevron-down fa-xs"></i>
							</span>
						</div>
					</div>
				</div>
			</section>

			<footer className="w-full bg-gray-50 flex flex-wrap gap-8 items-center justify-between px-8 py-8">
				<div>
					<p className="text-2xl font-bold">Get Started Today</p>
					<p className="text-sm text-gray-700">
						Start your 7-day free trial
					</p>
				</div>

				<div className="pl-4 border border-gray-300 focus-within:border-black rounded-[96px]">
					<input
						type="email"
						placeholder="Enter your email address"
						className="text-sm bg-transparent outline-none"
					/>
					<button className="text-sm bg-black text-white px-4 py-2 rounded-[96px]">
						Join Free
					</button>
				</div>
			</footer>
		</>
	);
}

export default App;
