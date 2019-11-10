import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/atoms/Header';
import Footer from '../components/atoms/Footer';

class Page extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Aplicação</title>
					<link rel="icon" href="/favicon.ico" />
					<meta charSet="utf-8" />
				</Head>

				<Header />
				<Component {...pageProps} />
				<Footer />
			</>
		);
	}
}

export default Page;
