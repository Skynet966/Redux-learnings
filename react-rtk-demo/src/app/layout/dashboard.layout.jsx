import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import CakeView from '../components/cake/CakeView';
import IcecreamView from '../components/icecream/IcecreamView';
import UserView from '../components/user/UserView';

const navigation = [
	{ name: 'Cake Shop', current: true },
	{ name: 'Icecream Shop', current: false },
	{ name: 'Users List', current: false },
];

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function DashboardLayout () {
	const [ currentActivePage, setCurrentActivePage ] = useState(0);
	return (
		<>
			<div className='min-h-full'>
				<Disclosure as='nav' className='bg-gray-800'>
					{({ open }) => (
						<>
							<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
								<div className='flex h-16 items-center justify-between'>
									<div className='flex items-center'>
										<div className='flex-shrink-0'>
											<img
												className='h-8 w-8'
												src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
												alt='Your Company'
											/>
										</div>
										<div className='hidden md:block'>
											<div className='ml-10 flex items-baseline space-x-4'>
												{navigation.map((item, index) => (
													<span
														key={item.name}
														className={classNames(
															index === currentActivePage
																? 'bg-gray-900 text-white'
																: 'text-gray-300 hover:bg-gray-700 hover:text-white',
															'px-3 py-2 rounded-md text-sm font-medium cursor-pointer',
														)}
														aria-current={item.current ? 'page' : undefined}
														onClick={() => setCurrentActivePage(index)}
													>
														{item.name}
													</span>
												))}
											</div>
										</div>
									</div>
									<div className='-mr-2 flex md:hidden'>
										{/* Mobile menu button */}
										<Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
											<span className='sr-only'>Open main menu</span>
											{open ? (
												<XMarkIcon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											) : (
												<Bars3Icon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className='md:hidden'>
								<div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
									{navigation.map((item, index) => (
										<Disclosure.Button
											key={item.name}
											as='span'
											className={classNames(
												index === currentActivePage
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block px-3 py-2 rounded-md text-base font-medium',
											)}
											aria-current={item.current ? 'page' : undefined}
											onClick={() => setCurrentActivePage(index)}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<header className='bg-white shadow'>
					<div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
						<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
							{navigation[ currentActivePage ].name}
						</h1>
					</div>
				</header>
				<main>
					<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
						{/* Replace with your content */}
						<div className='px-4 py-6 sm:px-0'>
							{currentActivePage === 0 && <CakeView />}
							{currentActivePage === 1 && <IcecreamView />}
							{currentActivePage === 2 && <UserView />}
						</div>
						{/* /End replace */}
					</div>
				</main>
			</div>
		</>
	);
}
