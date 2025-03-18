import Image from "next/image";
//main page

export default function Home() {
	return (
		<div className="">
			<main className="h-full min-h-[100vh] relative overflow-x-hidden max-w-[100vw]">
				<Image
					src="/blob-1.svg"
					alt="decorative image"
					width={420}
					height={420}
					className="fixed z-10 -top-20 -left-20 w-[200px] lg:-top-40 lg:-left-40 lg:w-[400px]"
				/>
				<Image
					src="/blob-2.svg"
					alt="decorative image"
					width={420}
					height={420}
					className="fixed -bottom-20 -right-20 z-10 w-[200px] lg:-bottom-40 lg:-right-40 lg:w-[400px]"
				/>
				<div className="relative w-full flex flex-col items-center">
					<Image
						src="/bg.jpg"
						alt="mountains"
						fill={true}
						className="h-full w-full object-cover object-bottom absolute bottom-0"
					/>
					<Image
						src="/hfj-logo.svg"
						alt="hope for justice logo"
						width={283}
						height={84}
						className="relative my-8 max-w-[150px] lg:max-w-[200px]"
					/>
					<Image
						src="/extreme-challenge-head.svg"
						alt="Extreme Challenge 2026 Canada: Sea to Summit. September 12th to 20th"
						width={773}
						height={486}
						className="relative mb-20 w-[80%] max-w-[700px] lg:mb-[200px]"
					/>
				</div>

				<div className="relative flex flex-col items-center -mt-5 lg:-mt-20 z-20">
					<Image
						src="/extreme-challenge-intro.svg"
						alt="Appreciate the sheer beauty of British Columbia from Vancuver to Whistler while pushing yourself to the limit for an incredible cause"
						width={1132}
						height={275}
						className="mb-10 w-[100vw] max-w-[1000px]"
					/>
					<p className="text-sm text-center max-w-[90%] mb-[8vw] lg:max-w-[50%] lg:mb-20 md:text-xl lg:text-2xl">
						CHANGE THE LIVES OF PEOPLE TRAPPED IN MODERN SLAVERY AND WHO HAVE
						SURVIVED HUMAN TRAFFICKING.
					</p>
					<div className="mx-4 flex gap-5 lg:gap-20 mb-10">
						<a
							target="_blank"
							href="https://hopeforjustice.org/wp-content/uploads/2025/03/Extreme-Challenge-2026-Brochure-A4-Single-Pages.pdf"
							className="cursor-pointer hover:scale-105 transition-all"
						>
							<Image
								src="/download-button.svg"
								alt="download"
								width={465}
								height={96}
							/>
						</a>
						<a
							href="mailto:andrew.wrath@hopeforjustice.org"
							className="cursor-pointer hover:scale-105 transition-all"
						>
							<Image
								src="/get-in-touch-button.svg"
								alt="get in touch"
								width={309}
								height={96}
							/>
						</a>
					</div>
					<p className="mb-40 px-4 text-center">
						Email organiser{" "}
						<a
							className="underline"
							href="mailto:andrew.wrath@hopeforjustice.org"
						>
							andrew.wrath@hopeforjustice.org
						</a>{" "}
						with your questions or to request an application form
					</p>
				</div>
			</main>
		</div>
	);
}
