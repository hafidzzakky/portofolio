const StaticAbstractBackground = () => {
	return (
		<div className='fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden'>
			<div className='absolute top-[-32%] left-[-22%] w-[105vw] h-[105vw] rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-[180px]' />

			<div className='absolute bottom-[-32%] right-[-22%] w-[105vw] h-[105vw] rounded-full bg-gradient-to-tl from-secondary/10 to-primary/5 blur-[180px]' />

			<div
				className='absolute inset-0 opacity-10'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			/>

			<div className='absolute top-[20%] right-[20%] w-64 h-64 border border-white/10 rounded-full backdrop-blur-3xl' />

			<div className='absolute bottom-[20%] left-[20%] w-96 h-96 border border-white/10 rounded-full backdrop-blur-3xl' />
		</div>
	);
};

export default StaticAbstractBackground;
